let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Sayonara , , ! 👋') 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc']
handler.tags = ['owner', 'group']
handler.command = /^(out|leavegc)$/i

handler.rowner = handler.group = handler.admin = true

export default handler