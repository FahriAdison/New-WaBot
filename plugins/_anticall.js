import { WAMessageStubType } from '@adiwajshing/baileys';
import { format } from 'util';

let handler = m => m;

const isNumber = x => typeof x === 'number' && !isNaN(x);
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this);
    resolve();
}, ms));

const setting = {
    anticall: true
};

handler.all = async function (m) {
    if (m.fromMe && m.isBaileys) return !0;
    let text;
    if (!setting.anticall) return;

    if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
        global.db.data.users[m.sender].banned = true;
        const sentMsg = await conn.sendContactArray(m.chat, [
            [ownerbot, `${await conn.getName(ownerbot + '@s.whatsapp.net')}`, `Developer Bot `, `Owner Bot Marin Kitagawa`, `marin.kitagawa.officiall@gmail.com`, `🇯🇵 Japan`, `https://marinkitagawa.site`, `Owner Bot`]
          ], fkontak)
        this.reply(m.chat, '*⚠️ Automated blocking system! ⚠️*\n\n*Do not call the bot*!\n*Please contact the Owner to be unblocked!*', sentMsg);
        await delay(1000);
        await this.updateBlockStatus(m.chat, "block");
    }
};

export default handler;