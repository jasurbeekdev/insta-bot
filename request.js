import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
            params: { url: inst_url },
            headers: {
                "content-type": "application/octet-stream",
                "X-RapidAPI-Key":
                    "8cc7597b66msh0bb1ff7bc5f5b7ap18ee75jsn901980db79c4",
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
