import fetch from 'node-fetch';

let handler = async (m, { text, command, usedPrefix, conn }) => {
    let salah_input = `*Example:*\n${usedPrefix}${command} naruto`;
    if (!text) throw salah_input;

    try {
        let res = await fetch(`https://api.marinkitagawa.toys/api/animanga/doudesusearch?query=${text}&apikey=admin123`);
        if (!res.ok) throw new Error(`Failed to fetch doujin search results: ${res.statusText}`);
        let json = await res.json();

        let item = json.result[0]; // Ambil item pertama dari hasil pencarian
        if (!item) throw 'Doujin not found.';

        let list = json.result.map(item => {
return `
*------------------------------*

*Title:* ${item.title}
*Type:* ${item.type}
*Status:* ${item.status}
*Score:* ${item.score}
*Url:* ${item.url}`;
    }).join('\n\n');

        let thumb = item.cover; // Ambil URL thumbnail dari item pertama

        conn.sendFile(m.chat, thumb, 'thumb.jpg', list, m);
    } catch (error) {
        console.error(error);
        throw 'An error occurred while fetching doujin search results...';
    }
}

handler.help = ["doujindesusearch"];
handler.tags = ['internet'];
handler.command = ["doujindesusearch"];

handler.register = true;

export default handler;