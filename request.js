import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
            params: { url: inst_url },
            headers: {
                "X-RapidAPI-Key":
                    "f1e0be6828msh079a4338cc943d2p1f710cjsnd6e61a48f69e",
                "X-RapidAPI-Host":
                    "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
            },
        };

        const response = await axios.request(options);

        const result = {
            videoUrl: response.data.media,
            caption: response.caption,
        };

        return result;
    } catch (err) {
        console.log(err);
    }
}

export default downloaderMethod;
