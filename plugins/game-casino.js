import fetch from 'node-fetch'

let buatall = 1
let handler = async (m, { conn, args, usedPrefix, command }) => {
let imgr = flaaa.getRandom()
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply ("Masih ada yang melakukan casino disini, tunggu sampai selesai!!")
    else conn.casino[m.chat] = true
    if (args.length < 1) return conn.reply(m.chat, usedPrefix + command + " <jumlah>\n" + usedPrefix + command + " 1000", m)
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (global.db.data.users[m.sender].money >= count * 1) {
            global.db.data.users[m.sender].money -= count * 1
            if (Aku > Kamu) {
    let caption = `                💰 *C A S I N O* 💰\n\n❏ *@${m.sender.split("@")[0]}* - [USER]\n┗┅⭑ ${Kamu} Point\n❏ *@${conn.user.jid.split("@")[0]}* - [BOT]\n┗┅⭑ ${Aku} Point\n\n❌ *LOSE* ❌\nKamu kehilangan ${count} Uang`.trim()
    conn.sendMessageModify(m.chat, caption, m, {
title: 'Casino',
ads: true, 
largeThumb: true,
thumbnail: await(await fetch(imgr + "LOSER")).buffer()
})
    } else if (Aku < Kamu) {
    let caption = `                💰 *C A S I N O* 💰\n\n❏ *@${m.sender.split("@")[0]}* - [USER]\n┗┅⭑ ${Kamu} Point\n❏ *@${conn.user.jid.split("@")[0]}* - [BOT]\n┗┅⭑ ${Aku} Point\n\n🎉 *WIN* 🎉\nKamu mendapatkan ${count * 2} Uang`.trim()
    conn.sendMessageModify(m.chat, caption, m, {
title: 'Casino',
ads: true, 
largeThumb: true,
thumbnail: await(await fetch(imgr + "WINNER")).buffer()
})
    } else {
    let caption = `                💰 *C A S I N O* 💰\n\n❏ *@${m.sender.split("@")[0]}* - [USER]\n┗┅⭑ ${Kamu} Point\n❏ *@${conn.user.jid.split("@")[0]}* - [BOT]\n┗┅⭑ ${Aku} Point\n\n🔖*DRAW* 🔖\nKamu mendapatkan ${count * 1} Uang`.trim()
     conn.sendMessageModify(m.chat, caption, m, {
title: 'Casino',
ads: true, 
largeThumb: true,
thumbnail: await(await fetch(imgr + "DRAW")).buffer()
})
            }
        } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk Casino silahkan *.claim* terlebih dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply("Error!!")
    } finally {
        delete conn.casino[m.chat]
    }
}
handler.help = ["casino <jumlah>"]
handler.tags = ["game"]
handler.command = /^(casino|csn)$/i

handler.register = true;

export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
