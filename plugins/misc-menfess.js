let handler = async(m, { conn, text, usedPrefix, command, args }) => {
	// Batas
    let [jid, name, pesan] = text.split(/[^\w\s]/g)
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan Menfes ke diri sendiri.'
    
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	let tujuan = `👋 Saya *${conn.user.name}*, Pesan Untuk Kamu
👥 Dari : *PENGIRIM RAHASIA*

${htki} 💌 Pesan ${htka}
${htjava} ${pesan}
`
	let cap = `${htki} PESAN RAHASIA ${htka}
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: ${usedPrefix + command} ${6285767373425} pesan untuknya

Contoh: ${usedPrefix + command} ${6285767373425} hai`
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
👥 Dari : @${m.sender.replace(/@.+/, '')}
👥 Untuk : @${jid.replace(/@.+/, '')}

${htki} 💌 Pesan ${htka}
${htjava} ${pesan ? pesan : 'Pesan Kosong'}
`
    // Batas
    command = command.toLowerCase()
    conn.menfes = conn.menfes ? conn.menfes : {}
    switch (command) {
        case 'menfesleave': {
            let room = Object.values(conn.menfes).find(room => room.check(m.sender))
            if (!room) return conn.reply(m.chat, '*Kamu tidak sedang berada di menfes chat*', null)
            m.reply('Sukses Hapus Menfes')
            let other = room.other(m.sender)
            if (other) await conn.reply(other, room.b + ' *Meninggalkan chat*', null)
            delete conn.menfes[room.id]
            if (command === 'menfesleave') break
        }
        case 'menfesstart': {
            if (Object.values(conn.menfes).find(room => room.check(m.sender))) return conn.reply(m.chat, '*Kamu masih berada di dalam menfes chat, menunggu Balasan*', null)
            let room = Object.values(conn.menfes).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                room.b = m.sender
                room.state = 'CHATTING'
                await conn.reply(room.a, '*Menfes Chat Tersambung!*\nDengan: ' + m.sender, null)
                await conn.reply(m.sender, '*Menfes Chat Tersambung!*\nDengan: ' + room.a, null)
            } else {
            // Batas
	if (!m.quoted) {
		await conn.reply(jid, tujuan+'\n'+cap, null)
	} else {
		await conn.reply(jid, tujuan+'\n'+cap, null)
		let media = q ? await m.getQuotedObj() : false || m
		await conn.copyNForward(jid, media, false).catch(_ => _)
	}
	await conn.reply(m.chat, suks, m, { mentions: conn.parseMention(suks) })
            // Batas
                let id = + new Date
                conn.menfes[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [conn.a, conn.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === conn.a ? conn.b : who === conn.b ? conn.a : ''
                    },
                }
                await conn.reply(m.chat, '*Menunggu Balasan...*', null)
            }
            break
        }
    }
}
handler.help = ['menfesstart', 'menfesleave']
handler.tags = ['misc']
handler.command = ['menfesstart', 'menfesleave']

handler.private = true

export default handler