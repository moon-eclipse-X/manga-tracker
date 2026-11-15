// Helper function to calculate days ago
const daysAgo = (dateString) => {
    const days = Math.floor((new Date() - new Date(dateString)) / 86400000);
    return days === 0 ? "Today" : `${days} days ago`;
};

// Load saved favorites and reading progress from browser storage
let savedFavorites = JSON.parse(localStorage.getItem("mangaFavorites")) || [];
let savedProgress = JSON.parse(localStorage.getItem("mangaProgress")) || {};

// Toggle favorite status when clicking the star button
function toggleFavorite(mangaId, btn) {
    const isFav = savedFavorites.includes(mangaId);
    savedFavorites = isFav ? savedFavorites.filter(id => id !== mangaId) : [...savedFavorites, mangaId];
    btn.classList.toggle("is-fav", !isFav);
    btn.innerText = isFav ? "☆" : "★";
    localStorage.setItem("mangaFavorites", JSON.stringify(savedFavorites));
    filterCards();
}

// Helper to format AniList official publication info
function formatOfficialInfo({ chapters, status, startDate, endDate }) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const chText = chapters ? `${chapters} ch. • ` : "";
    const formatDate = (d) => `${d.month ? `${months[d.month - 1]} ` : ""}${d.year}`;

    if (status === "FINISHED" && endDate?.year) return `${chText}Completed • ${formatDate(endDate)}`;
    if (startDate?.year) return `${chText}Serializing since ${formatDate(startDate)}`;
    return `${chText}Official release`;
}

// Save chapter progress from button click or direct input
function setProgress(mangaId, value) {
    const num = Math.max(0, parseInt(value) || 0);
    savedProgress[mangaId] = num;
    localStorage.setItem("mangaProgress", JSON.stringify(savedProgress));
    const input = document.getElementById(`${mangaId}-progress`);
    if (input) input.value = num;
    filterCards();
}

const updateProgress = (mangaId, change) => setProgress(mangaId, (savedProgress[mangaId] || 0) + change);

// Build HTML cards and fetch AniList data in batches of 50
async function initTracker() {
    const container = document.getElementById("manga-container");
    if (!container || typeof mangaList === "undefined") return;

    // Remove duplicates by anilistId and sort alphabetically (A-Z)
    const uniqueMangaList = Array.from(new Map(mangaList.map(m => [m.anilistId, m])).values())
        .sort((a, b) => a.title.localeCompare(b.title));

    uniqueMangaList.forEach((manga) => {
                             const isFav = savedFavorites.includes(manga.id);
        const anilistUrl = ["https://", "anilist.co/manga/", manga.anilistId].join("");

        // Search only across major official manga publishers when no direct readUrl is set
        const officialSites = "(site:mangaplus.shueisha.co.jp OR site:viz.com OR site:kodansha.com OR site:kodansha.us OR site:yenpress.com OR site:manga-up.com OR site:bookwalker.jp)";
        const searchQuery = encodeURIComponent(`${manga.title} ${officialSites}`);
        const fallbackSearch = "https://duckduckgo.com" + "/?q=" + searchQuery;

        const hasOfficialLink = Boolean(manga.readUrl);
        const targetUrl = hasOfficialLink ? manga.readUrl : fallbackSearch;
        const linkLabel = hasOfficialLink ? "Read Official ↗" : "Search Official ↗";
        const linkClass = hasOfficialLink ? "read-link" : "";

        const card = document.createElement("article");
        card.className = "manga-card";
        card.dataset.id = manga.id;
        card.dataset.title = manga.title.toLowerCase();

        card.innerHTML = `
            <div>
                <div class="card-header">
                    <h2>${manga.title}</h2>
                    <button class="fav-btn ${isFav ? "is-fav" : ""}" onclick="toggleFavorite('${manga.id}', this)" title="Save to favorites">${isFav ? "★" : "☆"}</button>
                </div>
                <p>Status: <span id="${manga.id}-status">Loading...</span></p>
                <p>Latest Chapter: <span id="${manga.id}-latest">Loading...</span></p>
                ${manga.note ? `<p class="custom-note">${manga.note}</p>` : ""}
                <div class="progress-box">
                    <div class="progress-input-group">
                        <span>Ch.</span>
                        <input type="number" id="${manga.id}-progress" class="progress-input" value="${savedProgress[manga.id] || 0}" min="0" onchange="setProgress('${manga.id}', this.value)" aria-label="Current chapter">
                    </div>
                    <div class="progress-controls">
                        <button class="step-btn outline secondary" onclick="updateProgress('${manga.id}', -1)" title="Decrease chapter">-</button>
                        <button class="step-btn" onclick="updateProgress('${manga.id}', 1)" title="Next chapter">+1</button>
                    </div>
                </div>
                                <div class="card-links">
                    <a href="${anilistUrl}" target="_blank" rel="noopener noreferrer">AniList</a>
                    <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${linkLabel}</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    filterCards();


    // Fetch AniList data in batches of 50
    let mediaResults = [];
    const anilistEndpoint = ["https://", "graphql.", "anilist.co"].join("");
    const query = `query ($ids: [Int]) { Page(perPage: 50) { media(id_in: $ids, type: MANGA) { id status chapters genres startDate { year month } endDate { year month } } } }`;

    for (let i = 0; i < uniqueMangaList.length; i += 50) {
        const batchIds = uniqueMangaList.slice(i, i + 50).map(m => m.anilistId);
        try {
            const res = await fetch(anilistEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query, variables: { ids: batchIds } })
            });
            const alData = await res.json();
            if (alData?.data?.Page?.media) {
                mediaResults = mediaResults.concat(alData.data.Page.media);
            }
        } catch (err) {
            console.error("AniList batch fetch failed:", err);
        }
    }

    // Match each AniList result back to its card and queue Jikan safely
    let delay = 0;
    for (const manga of uniqueMangaList) {
        const info = mediaResults.find(item => item.id === manga.anilistId);
        if (!info) continue;

        const statusBadge = document.getElementById(`${manga.id}-status`);
        if (!statusBadge) continue;

        statusBadge.innerText = info.status;
        statusBadge.className = `status-badge status-${info.status.toLowerCase()}`;

        const card = statusBadge.closest(".manga-card");
        card.dataset.status = info.status.toLowerCase();
        card.dataset.genres = info.genres.join(",").toLowerCase();

        document.getElementById(`${manga.id}-latest`).innerText = formatOfficialInfo(info);

        setTimeout(() => checkMyAnimeList(manga.title, `${manga.id}-latest`, info), delay);
        delay += 400;
    }
    filterCards();
}
// Fetch exact chapter & volume counts from Jikan (MyAnimeList API)
async function checkMyAnimeList(mangaTitle, elementId, anilistBackup) {
    const cacheKey = `mal_cache_${mangaTitle.toLowerCase()}`;
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    const oneDay = 86400000;

    if (cached && (Date.now() - cached.savedAt < oneDay)) {
        const el = document.getElementById(elementId);
        if (cached.text && el) el.innerText = cached.text;
        return;
    }

    try {
        const jikanBase = ["https://", "api.", "jikan.moe/v4/manga?q="].join("");
        const apiUrl = `${jikanBase}${encodeURIComponent(mangaTitle)}&limit=1`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data?.data?.length > 0) {
            const mal = data.data[0];
            const parts = [];
            if (mal.chapters) parts.push(`Chapter ${mal.chapters}`);
            if (mal.volumes) parts.push(`${mal.volumes} vols`);

            if (parts.length > 0) {
                const aniText = formatOfficialInfo(anilistBackup);
                const resultText = mal.chapters ? parts.join(" • ") : `${parts.join(" • ")} • ${aniText}`;

                const el = document.getElementById(elementId);
                if (el) el.innerText = resultText;
                localStorage.setItem(cacheKey, JSON.stringify({ text: resultText, savedAt: Date.now() }));
            }
        }
    } catch (error) {
        // Keep the clean AniList info already shown on the card
    }
}

// Combined live search + status/favorites filter + genre filter
let currentFilter = sessionStorage.getItem("mangaActiveFilter") || "all";
let currentGenre = sessionStorage.getItem("mangaActiveGenre") || "all";
let currentSearch = "";

function filterCards() {
    const cards = document.querySelectorAll(".manga-card");
    let visibleCount = 0;

    cards.forEach(card => {
        const id = card.dataset.id;
        const title = card.dataset.title || "";
        const status = card.dataset.status || "";
        const genres = card.dataset.genres || "";

        const matchesSearch = title.includes(currentSearch);
        const matchesGenre = currentGenre.toLowerCase() === "all" || genres.includes(currentGenre.toLowerCase());

        let matchesFilter = true;
        if (currentFilter === "favorites") matchesFilter = savedFavorites.includes(id);
        else if (currentFilter === "reading") matchesFilter = (savedProgress[id] || 0) > 0;
        else if (currentFilter !== "all") matchesFilter = status === currentFilter;

             if (matchesSearch && matchesFilter && matchesGenre) {
          card.classList.remove("hidden");
          visibleCount++;
      } else {
          card.classList.add("hidden");
      }
    });

    const countElement = document.getElementById("results-count");
    if (countElement) countElement.innerText = `Showing ${visibleCount} of ${cards.length} manga`;
}

// Initialize all event listeners once the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value.toLowerCase();
            filterCards();
        });
    }

    const genreFilter = document.getElementById("genre-filter");
    if (genreFilter) {
        // Restore saved genre selection on reload
        genreFilter.value = currentGenre;

        genreFilter.addEventListener("change", (e) => {
            currentGenre = e.target.value;
            sessionStorage.setItem("mangaActiveGenre", currentGenre);
            filterCards();
        });
    }

    // Restore active filter button highlight on reload
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.filter === currentFilter);

        button.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            currentFilter = this.dataset.filter;
            sessionStorage.setItem("mangaActiveFilter", currentFilter);
            filterCards();
        });
    });

    // Back-to-top button visibility and smooth scroll
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            backToTopBtn.classList.toggle("visible", window.scrollY > 400);
        });
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Export and import localStorage progress as a local JSON file
    const exportBtn = document.getElementById("export-btn");
    const importBtn = document.getElementById("import-btn");
    const importFile = document.getElementById("import-file");

    if (exportBtn && importBtn && importFile) {
        exportBtn.addEventListener("click", () => {
            const backupData = JSON.stringify(localStorage, null, 2);
            const blob = new Blob([backupData], { type: "application/json" });
            const url = URL.createObjectURL(blob);

            const dateStr = new Date().toISOString().slice(0, 10);
            const link = document.createElement("a");
            link.href = url;
            link.download = "manga-tracker-backup-" + dateStr + ".json";
            link.click();
            URL.revokeObjectURL(url);
        });

        importBtn.addEventListener("click", () => importFile.click());

        importFile.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const parsedData = JSON.parse(e.target.result);
                    if (typeof parsedData !== "object" || parsedData === null) {
                        throw new Error("Invalid backup format");
                    }
                    Object.keys(parsedData).forEach((key) => {
                        localStorage.setItem(key, parsedData[key]);
                    });
                    alert("Progress restored successfully! Reloading page...");
                    location.reload();
                } catch (error) {
                    alert("Failed to import backup. Please select a valid JSON backup file.");
                }
            };
            reader.readAsText(file);
            importFile.value = "";
        });
    }

    // Start the app
    initTracker();
});