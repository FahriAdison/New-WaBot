import fetch from "node-fetch"

let handler = async (m, { conn, text, args }) => {
    try {
        if (!text) return conn.reply("Username?");
       
        let username = encodeURIComponent(args[0]);
        let response = await fetch(`https://aemt.me/download/tiktokstalk?username=${username}`);
        let data = await response.json();
        
        if (!data.status) {
            return conn.reply("User tidak ditemukan.");
        }
        
        let txt = `
┌──「 *TIKTOK STALK*」
├─ *🔖Username:* ${data.result.username}
├─ *👥Followers:* ${data.result.followers}
├─ *🫂Following:* ${data.result.following}
├─ *📌Desc:* ${data.result.description}
└─ *🔗 Link* : https://tiktok.com/${data.result.username}`;
        
        await conn.sendFile(m.chat, data.result.profile, 'tt.png', txt, m);
    } catch (e) {
        console.log("Error");
    }
};

handler.help = ['ttstalk'];
handler.tags = ['downloader'];
handler.command = /^ttstalk$/i;
export default handler;
