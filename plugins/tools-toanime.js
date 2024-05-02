import Jimp from "jimp";
import uploadImage from '../lib/uploadImage.js';
import drawAnime from '../lib/toanime.js';

let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!`;
    await m.reply(wait);
    let data = await q.download?.();
    let image = await uploadImage(data);
    let anime;
    try {
        anime = await drawAnime(image);
    } catch (e) {
        await m.reply(error);
        return;
    }
    await conn.sendFile(m.chat, anime, 'anime.jpg', "Sudah Jadi", m, false);
};
handler.help = ["toanime"].map(v => v + " (Balas foto)");
handler.tags = ["tools"];
handler.command = /^(to|jadi)anime$/i;
handler.register = true
handler.limit = true;
export default handler;