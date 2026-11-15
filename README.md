# Manga Release Tracker

A simple web app to track my favorite manga, current reading progress, and latest chapter releases.

## Features

- Filter by status (`Reading`, `Releasing`, `Hiatus Radar`, `Finished`), favorites, or genre
- Track current chapter progress locally in the browser (`localStorage`)
- Export and import reading progress as a JSON backup file
- Links to AniList and official publishers

## Data Sources

- [AniList GraphQL API](https://anilist.co) for series status, genres, and release dates
- [Jikan API](https://jikan.moe) (MyAnimeList) for exact chapter and volume counts
