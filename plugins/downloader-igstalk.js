import fetch from 'node-fetch';

let handler = async (m, { command, text, conn }) => {
    if (!text) throw 'Example use ${usedPrefix}${command} username';
    try {
        let res = await fetch(`https://apiv2.marinkitagawa.toys/igstalk?user=${text}`)
        let json = await res.json()
        let result = json.result
        conn.sendFile(m.chat, result.avatar, 'img.jpg', `
乂 I G  S T A L K 乂

📷 *Name:* ${result.fullname}
👤 *Username:* ${result.username}
❤️ *Followers:* ${result.followers}
💙 *Following:* ${result.following}
📅 *Posts:* ${result.post}
📝 *Bio:*
${result.description}
        `.trim(), m);
    } catch (e) {
        m.reply('Error. Terjadi kesalahan 😔');
    }
};

handler.help = ['igstalk'].map(v => v + ' <username>');
handler.tags = ['tools'];
handler.register = true;
handler.command = /^(igstalk)$/i;

export default handler;
