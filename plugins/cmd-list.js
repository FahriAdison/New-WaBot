let handler = async (m, { conn }) => {
     conn.sendHydrated(m.chat, `\t*${l} DAFTAR HASH ${r}*\t`, `\t 
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(Terkunci) ${key}` : key} : ${value.text}`).join('\n\n')}
\t`, null, null, null, null, null, [], m, { asLocation: false })
}


handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

handler.register = true

export default handler