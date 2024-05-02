let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('sorry, because you use too many bot features excessively, so I decided to block you, call this number if you want to be released wa.me/6285767373425')
     conn.updateBlockStatus(m.chat, "block")
   } 
    }

export default handler