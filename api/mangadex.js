module.exports = async function handler(req, res) {
    try {
        const { id, lang } = req.query;
        const apiUrl = "https://" + `api.mangadex.org/manga/${id}/feed?translatedLanguage[]=${lang}&order[chapter]=desc&limit=1`;

        const response = await fetch(apiUrl, {
            headers: {
                "User-Agent": "MangaReleaseTracker/1.0 (https://github.com)",
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        // Return empty data instead of crashing with a 500 error
        return res.status(200).json({ data: [] });
    }
};