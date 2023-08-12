import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
            params: { url: inst_url },
            headers: {
                "X-RapidAPI-Key":
                    "23e1c807e0mshfc23f757a76d7a4p15bd3cjsn860abd90426d",
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
