let handler = async (m, {
    conn,
    args,
    usedPrefix
}) => {
    const user = global.db.data.users[m.sender];
    if (args.length !== 1 || isNaN(args[0])) {
        return conn.reply(m.chat, `❓ Masukkan total jumlah gift yang ingin kamu beli.\nContoh: *${usedPrefix}buygift 2*`, m);
    }

    const total = parseInt(args[0]);
    const giftPrice = 1000;
    const maxTotal = 10;

    if (total < 1 || total > maxTotal) {
        return conn.reply(m.chat, `❌ Maaf, kamu hanya bisa membeli 1 hingga ${maxTotal} gift sekaligus.`, m);
    }

    const totalPrice = total * giftPrice;
    if (user.money < totalPrice) {
        return conn.reply(m.chat, `❌ Maaf, uangmu tidak cukup untuk membeli ${total} gift.\nTotal biaya: ${totalPrice} Uang\nUang kamu saat ini: ${user.money} Uang`, m);
    }

    let giftCodes = [];
    for (let i = 0; i < total; i++) {
        const giftCode = generateGiftCode();
        giftCodes.push(giftCode);
    }

    if (!conn.freegift) conn.freegift = {};
    conn.freegift[m.sender] = {
        ...(conn.freegift[m.sender] || {}),
        code: conn.freegift[m.sender]?.code ? conn.freegift[m.sender].code.concat(giftCodes) : giftCodes,
    };
    user.money -= totalPrice;
    conn.reply(m.chat, `🎁 Kamu telah membeli ${total} gift dengan total ${totalPrice} Uang.\n\nKode Gift mu dengan urutan angka:\n${giftCodes.map((code, index) => `${index + 1}. ${code}`).join('\n')}`, m);
};
handler.help = ['buygift <total>'];
handler.tags = ['rpg'];
handler.command = /^buygift$/i;
handler.register = true

export default handler;

function generateGiftCode() {
    const length = 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}