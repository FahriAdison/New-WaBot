import fs from 'fs'

let handler = async(m, { conn }) => {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  let i = global.owner.map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  const sentMsg = await conn.sendContactArray(m.chat, [
    [ownerbot, `${await conn.getName(ownerbot + '@s.whatsapp.net')}`, `Developer Bot `, `Jangan Bully Saya Bang 😢👆`, `marin.kitagawa.officiall@gmail.com`, `🇯🇵 Japan`, `https://marinkitagawa.site`, `Owner Bot`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Bot Whatsapp`, `📵 Dont Spam`, `Nothing`, `🇯🇵 japan`, `https://marinkitagawa.site`, `Jika Error Segera Lapor Ke Owner Agar Di perbaiki`]
  ], fkontak)
  conn.sendMessage(m.chat, { text: `Hai Kak @${m.sender.split('@')[0]}, Nih Kontak Owner Saya Jangan Di Spam Ya Kak ^_^`, mentions: [m.sender] }, { quoted: sentMsg})
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler