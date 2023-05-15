import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import downloaderMethod from "./request.js";
import morgan from "morgan";
import pg from "pg";
import { connectionString } from "./config.js";

dotenv.config();

const pool = new pg.Pool({
    connectionString: connectionString,
});

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true,
});

morgan("tiny");

bot.on("message", async (msg) => {
    try {
        const ChatId = msg.chat.id;

        console.log(msg);

        if (msg.text == "/start") {
            await bot.sendMessage(
                ChatId,
                `
		    Assalomu Alaykum ${msg.from.first_name} InstaSave botga hush kelibsiz 😊😊 siz bu botga instagram video yuborsangiz sizga video yuklab beradi 

		Привет ${msg.from.first_name} Добро пожаловать в бота InstaSave 😊😊 если вы отправите этому боту видео из Instagram, он скачает видео для вас

		Hello ${msg.from.first_name} Welcome to the InstaSave bot 😊😊 if you send an Instagram video to this bot, it will download the video for you
		`,
                {
                    parse_mode: "HTML",
                }
            );
            const user = await pool.query(
                `insert into users(username, user_id) values($1,$2)`,
                [msg.from.first_name, msg.from.id]
            );

            console.log(user);
        }

        const getVideoUrl = await downloaderMethod(msg.text);


        console.log(getVideoUrl);

        await bot.sendVideo(ChatId, getVideoUrl.videoUrl, {
            caption: getVideoUrl.caption,
        });

        
       await pool.query(`insert into users(username, user_id) values($1,$2)`, [
        msg.from.first_name,
        msg.from.id,
    ]);

    await pool.query(`insert into old_users(username, user_id) values($1,$2)`, [
        msg.from.first_name,
        msg.from.id,
    ]);
    
    } catch (err) {
        // console.log(err);
        const ChatId = msg.chat.id;

        if (!msg.entities) {
            await bot.sendMessage(
                ChatId,
                `Iltimos instagram video link yuboring`,
                {
                    parse_mode: "HTML",
                }
            );
        }
    }
});
