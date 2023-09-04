import axios from "axios";

async function downloaderMethod(inst_url) {
    try {
        const options = {
            method: "GET",
            url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
                params: { url: inst_url },
                headers: {
                    'X-RapidAPI-Key': '374406a85amshc89cb52e46f8a70p1ab57bjsn5a10938059cb',
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
