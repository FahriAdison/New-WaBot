import { xpRange, canLevelUp, findLevel } from '../lib/levelling.js'
import canvacord from 'canvacord'

let handler = m => m
handler.all = async function (m) {
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup)
        return !0
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        let pic = await( await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
        let who = m.sender
        let exp = global.db.data.users[m.sender].exp
        let discriminator = who.substring(9, 13)
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        try {
                pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
        } catch (e) {
        } finally {
                if (!user.autolevelup) return !0
                let before = user.level * 1
                while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
                if (before !== user.level) {
                	user.role = global.db.data.users[m.sender].role
					const rank = new canvacord.Rank()
					.setRank(usersLevel.indexOf(m.sender) + 1)
					.setLevel(user.level)
					.setAvatar(pic)
					.setCurrentXP(user.exp - min)
					.setRequiredXP(xp)
					.setStatus('online')
					.setProgressBar('#FFFFFF', 'COLOR')
					.setUsername(conn.getName(m.sender))
					.setBackground('IMAGE', 'https://i.ibb.co/rxWdgSL/marin.jpg')
                        {
							let text = `乂  L E V E L  U P
                            
┌  ◦ Progress : [${before}] ➠ [${user.level}]
└  ◦ Clock : ${new Date().toLocaleString('id-ID')}
                            
_© Marin Kitagawa_
							`

							conn.sendFile(m.chat, await rank.build(), 'ERROR.jpg', text, m)
                   
						}
                }
        }
}
export default handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}