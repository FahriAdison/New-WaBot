import tio from 'btch-downloader'
import fetch from 'node-fetch'; 

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `Enter the link of the TikTok video`;
    if (!args[0].match(/tiktok/gi)) throw `Make sure the link is from TikTok`;
    conn.reply(m.chat, global.wait, m);
    try {
            let json = await tio.ttdl((args[0])) 
            let fetchStartTime = new Date();
            let fetchResponse = await fetch(args[0]);
            let fetchEndTime = new Date();
            let fetchTime = fetchEndTime - fetchStartTime;
            let caption = `乂  *T I K T O K*\n\n`;
        caption += `${json.title || '-'}\n`;
        caption += `	◦  Fetching Time : ${fetchTime} ms`;        
            conn.sendFile(m.chat, json.video, '', caption, m);       
            await conn.sendMessage(m.chat, {
                audio: {
                    url: json.audio
                },
                mimetype: 'audio/mp4'
            }, {
                quoted: m
            })                
    } catch {
    m.reply('☓ An unexpected error occurred');
        try {
            let res = await fetch(global.API('marin', '/api/download/tiktok', {
                url: args[0]
            }, 'apikey'));
            let json = await res.json();
            let fetchStartTime = new Date();
            let fetchResponse = await fetch(args[0]);
            let fetchEndTime = new Date();
            let fetchTime = fetchEndTime - fetchStartTime;
            let caption = `乂  *T I K T O K*\n\n`;
            caption += `	◦  Author : ${json.result.nickname} (@${json.result.unique_id})\n`;
            caption += `	◦  Download Count : ${json.result.download_count}\n`;
            caption += `	◦  Duration : ${json.result.duration}\n`;
            caption += `	◦  Fetching Time : ${fetchTime}ms\n`;

            caption += `	◦  Caption : ${json.result.description || '-'}`;
            conn.sendFile(m.chat, json.result.play, '', caption, m);
    } catch {
            m.reply('☓ An unexpected error occurred');
        }
    }
}

handler.help = ['tiktok'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i;

handler.register = true;
handler.limit = true

export default handler