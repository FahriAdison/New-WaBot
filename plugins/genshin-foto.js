let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
if (!text) {
  throw `Masukan Nama Karakternya!\nContoh:\n${usedPrefix + command} Dehya`
}
m.reply(wait)
let anu = `https://enka.network/ui/UI_AvatarIcon_${text}.png`
conn.sendFile(m.chat, anu, 'anu.jpg', `Profil: ${text}\nJika Tidak Ada Gambar Maka karakter Tidak Valid!`, m)
    
}
handler.help = ['gifoto']
handler.tags = ['genshin']
handler.command = /^(gifoto|gifto)$/i
handler.register = true;
handler.limit = true
export default handler