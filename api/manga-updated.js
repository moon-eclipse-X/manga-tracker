module.exports = async function handler(req, res) {
    try {
        const title = req.query.title;
        const apiUrl = "https://" + "api.mangaupdates.com" + "/v1/series/search";

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ search: title, perpage: 1 })
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(200).json({ results: [] });
    }
};