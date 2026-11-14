export default async function handler(req, res) {
    const { id, lang } = req.query;
    const url = `https://mangadex.org{id}/feed?translatedLanguage[]=${lang}&order[chapter]=desc&limit=1`;
    
    const response = await fetch(url, {
        headers: { "User-Agent": "MangaReleaseTracker/1.0" }
    });
    const data = await response.json();
    res.status(200).json(data);
}