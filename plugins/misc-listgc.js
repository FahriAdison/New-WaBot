let handler = async (m, { conn, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating()),
		txt = `*┉┄┈┈┈ 『  GROUP LIST  』 ┉┄┈┈┈*\n\n*Total:* ${groups.length}\n\n`
	for (let i = 0; i < groups.length; i++) {
		txt += `*≻ Subject:* ${groups[i].subject}\n`
      + `*➦ Owner:* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}\n`
			+ `*➦ ID:* ${groups[i].iad}\n`
			+ `${isOwner ? `*➦ Participants:* ${groups[i].participants.length}\n` : ''}`
			+ `${isOwner ? `*➠ BotAdmin:* ${!!groups[i].participants.find(v => v.id == conn.user.jid)}\n` : ''}` + `›`.repeat(50) + '\n'
	}
	m.reply(txt.trim())
}
handler.command = /^list(gc|gro?up)$/i

export default handler