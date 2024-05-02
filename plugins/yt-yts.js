import yts from "yt-search"
import {
    generateWAMessageFromContent
} from "@adiwajshing/baileys"
import { format } from 'util';

let handler = async (m, {
    conn,
    text
}) => {
    if (!text) throw "✳️ What do you want me to search for on YouTube?"
    let results = await yts(text)
    let tes = results.all
    let teks = results.all.map(v => {
        switch (v.type) {
            case "video":
                return `
*Type:* ${v.type}
*VideoId:* ${v.videoId}
*URL:* ${v.url}
*Title:* ${v.title}
*Image:* ${v.image}
*Thumbnail:* ${v.thumbnail}
*Seconds:* ${v.seconds}
*Timestamp:* ${v.timestamp}
*Duration Timestamp:* ${v.duration.timestamp}
*Duration Seconds:* ${v.duration.seconds}
*Ago:* ${v.ago}
*Views:* ${formatNumber(v.views)}
*Author Name:* ${v.author.name}
*Author URL:* ${v.author.url}
   `.trim()
            case "canal":
                return `
🔖 *${v.name}* (${v.url})
⚡ ${v.subCountLabel} (${v.subCount}) Suscribe
📽️ ${v.videoCount} videos
`.trim()
        }
    }).filter(v => v).join("\n\n________________________\n\n")
    
        let ytthumb = await (await conn.getFile(tes[0].thumbnail)).data
        let msg = await generateWAMessageFromContent(m.chat, {
            extendedTextMessage: {
                text: teks,
                jpegThumbnail: ytthumb,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        body: "S E A R C H",
                        containsAutoReply: true,
                        mediaType: 1,
                        mediaUrl: tes[0].url,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceId: "WudySoft",
                        sourceType: "PDF",
                        previewType: "PDF",
                        sourceUrl: tes[0].url,
                        thumbnail: ytthumb,
                        thumbnailUrl: tes[0].thumbnail,
                        title: htki + " Y O U T U B E " + htka
                    }
                }
            }
        }, {
            quoted: m
        })
        await conn.relayMessage(m.chat, msg.message, {})
}
handler.help = [""].map(v => "yts" + v + " <pencarian>")
handler.tags = ["searching"]
handler.command = /^y(outubesearch|ts(earch)?)$/i
handler.register = true
export default handler

function formatNumber(number) {
  if (number >= 1e9) {
    return `${(number / 1e9).toFixed(0)}B`;
  } else if (number >= 1e6) {
    return `${(number / 1e6).toFixed(0)}M`;
  } else if (number >= 1e3) {
    return `${(number / 1e3).toFixed(0)}K`;
  }
  return number.toString();
}
