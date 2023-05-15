import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
            params: { url: inst_url },
            headers: {
                "X-RapidAPI-Key":
                    "117a87ddf1mshf5ec7c7fc9b06f2p175c5ejsn50a05becd599",
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
