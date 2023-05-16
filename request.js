import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
            params: { url: inst_url },
            headers: {
                'X-RapidAPI-Key': '34a74bb5d2mshbec3d8a4f434df8p135c31jsnad99779f9ffa',
                'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
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
