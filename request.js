import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
            params: { url: inst_url },
            headers: {
                "X-RapidAPI-Key":
                    "09ce2f9a69mshd071b15b4ed6295p1b8075jsn3284a34386ae",
                "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com",
            },
        };

        const response = await axios.request(options);

        const result = {
            videoUrl: response.data.video,
            caption: response.data.caption,
        };

        return result;
    } catch (err) {
        console.log(err);
    }
}

export default downloaderMethod;
