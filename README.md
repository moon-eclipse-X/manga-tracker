# Manga Release Tracker

A simple, fast web app to track the latest chapter releases and hiatus updates for manga using the **AniList** and **MangaDex** APIs.

---

## How to Add a New Manga

### 1. Copy the Template

Paste this block into the `mangaList` array inside `index.html` (do not forget the comma `,` after the previous item):

```javascript
{
    id: "short-unique-name",
    title: "Exact Manga Title",
    anilistId: 00000,
    mangadexId: "paste-mangadex-uuid-here"
},
```

(Note: The website automatically sorts all manga alphabetically from A to Z, so you can paste new entries anywhere in the list.)

---

### 2. Where to Find the IDs

#### AniList ID (Numbers only)

1. Go to `anilist.co` and search for the manga.
2. Open the manga page and look at your browser's address bar.
3. Example URL: `anilist.co/manga/30026/Hunter-x-Hunter/`
4. Copy the number right after `/manga/` (`30026`) and paste it **without quotes** (`anilistId: 30026`).

#### MangaDex ID (Long UUID with dashes)

1. Go to `mangadex.org` and search for the same manga.
2. Open the manga page and look at the address bar.
3. Example URL: `mangadex.org/title/db6c8568-b826-4473-9317-91191d1d452c/hunter-x-hunter`
4. Copy the long code right after `/title/` and paste it **with quotes** (`mangadexId: "db6c8568-b826-4473-9317-91191d1d452c"`).

#### Quick Shortcut & Fallback Tip

* **Shortcut:** Once you open a manga on MangaDex, scroll down to the **Track** section and click the **AniList** button to jump straight to the matching AniList page.
* **Not on MangaDex?** Leave the ID empty (`mangadexId: ""`). The tracker will automatically fall back to AniList database updates.
