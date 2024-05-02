import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
  
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a83a18704094111343cc4.jpg')
  const anu = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : -777777777,
                            itemCoun : -777777777,
                            surface : 404,
                            message: `Hidetag by: ${conn.getName(m.sender)}`,
                            orderTitle: me,
                            thumbnail: await( await fetch(pp)).buffer(), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
  if (!(isOwner || isAdmin)) throw dfail('admin', m, conn)
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: anu ,
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = handler.alias = ['hidetag', 'tag']
handler.tags = ['group']
handler.command = /^(hidetag|tag)$/i
handler.register = true;
handler.group = true
handler.admin = true

export default handler
/* import { generateWAMessageFromContent } from '@adiwajshing/baileys'

import fetch from 'node-fetch'

let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {

let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a83a18704094111343cc4.jpg')
  const anu = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : -777777777,
                            itemCoun : -777777777,
                            surface : 404,
                            message: `Hidetag by: ${conn.getName(m.sender)}`,
                            orderTitle: me,
                            thumbnail: await( await fetch(pp)).buffer(), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
  if (!(isOwner || isAdmin)) throw dfail('admin', m, conn)
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? await m.getQuotedObj() : m.msg
  let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: anu, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
  // console.log(msg)
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = handler.alias = ['hidetag', 'tag']
handler.tags = ['group']
handler.command = /^(hidetag|tag)$/i
handler.admin = handler.group = true

export default handler
*/