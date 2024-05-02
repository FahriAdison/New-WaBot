function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let handler = async (m, {
    conn,
    args,
    usedPrefix
}) => {
    const user = global.db.data.users[m.sender];
    const lastgiftTime = user.lastgift || 0;
    const currentTime = new Date().getTime();
    const cooldownDuration = 3600000;

    conn.freegift = conn.freegift || {};

    if (currentTime - lastgiftTime < cooldownDuration) {
        const remainingCooldown = cooldownDuration - (currentTime - lastgiftTime);
        const remainingTime = getRemainingTime(remainingCooldown);
        return conn.reply(m.chat, `⏰ Maaf, kamu harus menunggu ${remainingTime} lagi sebelum menggunakan FreeGift lagi!`, m);
    }

    const today = new Date().toLocaleDateString();
    let freegift = conn.freegift[m.sender] || (conn.freegift[m.sender] = {
        code: [],
        time: today
    });

    if (!args[0]) return conn.reply(m.chat, `❓ Kamu belum memasukkan Kode FreeGiftmu!\n\nContoh: *${usedPrefix}freegift code*`, m);

    const validGiftcode = freegift.code.filter(code => args[0] === code);

    if (!validGiftcode.length) {
        const remainingTime = getRemainingTime(cooldownDuration);
        return conn.reply(m.chat, `Maaf, kode FreeGift tidak valid atau sudah digunakan. Silahkan coba lagi setelah ${remainingTime}!`, m);
    }

    const maxExp = 10000,
        maxMoney = 10000;
    const rewards = shuffle([{
        text: '💠 XP',
        value: Math.min(Math.floor(Math.random() * maxExp), maxExp)
    }, {
        text: '🎫 Limit',
        value: Math.min(Math.floor(Math.random() * 5) + 1, 5)
    }, {
        text: '💹 Money',
        value: Math.min(Math.floor(Math.random() * maxMoney), maxMoney)
    }, {
        text: '🥤 Potion',
        value: Math.min(Math.floor(Math.random() * 5) + 1, 5)
    }]);

    conn.reply(m.chat, `*🎉 SELAMAT!*\nKamu telah mendapatkan:\n${rewards.map(r => `${r.text}: ${r.value}`).join('\n')}`, m);

    user.exp += rewards.find(r => r.text === '💠 XP').value;
    user.limit += rewards.find(r => r.text === '🎫 Limit').value;
    user.money += rewards.find(r => r.text === '💹 Money').value;
    user.potion += rewards.find(r => r.text === '🥤 Potion').value;

    freegift.code = freegift.code.filter(code => code !== args[0]); // Remove used code
    user.lastgift = currentTime; // Update lastgift time

    setTimeout(() => conn.reply(m.chat, '⏰ Waktunya menggunakan FreeGift lagi!\nKetik *freegift* untuk mendapatkan hadiah spesial.', m), cooldownDuration);
};

handler.help = ['freegift <kode>'];
handler.tags = ['rpg'];
handler.command = /^freegift$/i;
handler.register = true

export default handler;

function getRemainingTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    return `${hours > 0 ? `${hours} jam ` : ''}${minutes > 0 ? `${minutes} menit` : ''}`.trim();
}