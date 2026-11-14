# Manga Release Tracker

A fast, lightweight web application to track the publication status, volume counts, and hiatus updates for 100+ popular manga and manhwa series in one clean dashboard.

**Live Demo:** [manga-tracker-moon-eclipse-x.vercel.app](https://vercel.app)

## Features

- **Live Status & Publication Data:** Automatically fetches real-time status (`RELEASING`, `ON HIATUS`, `FINISHED`), genres, and publication dates via the **AniList GraphQL API** (in batches of 50).
- **Volume & Chapter Counts:** Combines AniList data with the **Jikan (MyAnimeList) API** using a rate-limited queue and 24-hour `localStorage` caching.
- **No-Account Favorites (⭐):** Click the star icon on any card to bookmark your personal reading list locally in your browser.
- **Instant Search & Multi-Filtering:** Filter live by title, publication status, favorites, or 10 different genres with a real-time result counter.
- **Custom Hiatus Notes:** Includes curated context notes for series known for irregular schedules or extended author breaks.

## Tech Stack

- **Frontend:** Semantic HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling:** [Pico.css](https://picocss.com) (Dark Mode) with custom responsive CSS Grid
- **APIs:** AniList GraphQL API & Jikan REST API
- **Hosting:** Deployed via GitHub & Vercel
