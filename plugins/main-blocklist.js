
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
    let no = 1;
		let txt = `*≡ L I S T  B L O C K*\n\n*Total :* ${data.length}\n\n┌───────────⊷\n`
		for (let i of data) {
			txt += `▢ ${no++}. @${i.split("@")[0]}\n`
		}
		txt += "└───────────"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'no numbers blocked'
	})
}

handler.help = ['blocklist']
handler.tags = ['info']
handler.command = ['blocklist', 'listblock'] 
handler.rowner = true

export default handler