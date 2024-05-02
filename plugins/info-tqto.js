import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let name = await conn.getName(who)
    let tqto = `*${htki} BIG THANKS TO ${htka}*
*❉ Whiskeysockets:*
https://github.com/whiskeysockets
*❉ Nurutomo:*
https://github.com/Nurutomo
*❉ Istikmal:* 
https://github.com/BochilGaming
*❉ Ariffb:*
https://github.com/Ariffb25
*❉ Johannes:*
https://github.com/Johannes2803
*❉ LitRHap:*
https://github.com/LitRHap
*❉ Rlxfly:*
https://github.com/Rlxfly
*❉ Taylor/Wudy:*
https://github.com/AyGemuy
*▸ - - - —「 KANG RECODE 」— - - - ◂*
*❉ Fahri:*
https://github.com/FahriAdison
*❉ Johannes:*
https://github.com/Johannes2803
*▸ - - - —「 SPESIAL HELPER 」— - - - ◂*
*❉ Johannes:*
*❉ Rlxfly:*
*❉ Taylor/Wudy:*
`
    conn.reply(m.chat, tqto, m)
}
handler.help = ['tqto']
handler.tags = ['main', 'info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
