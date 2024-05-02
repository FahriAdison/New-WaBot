import {
    promises as fsPromises
} from 'fs';
import {
    createHash
} from "crypto";
import fetch from "node-fetch";
import https from 'https'; // Import modul https

let Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

let handler = async (m, {
    conn,
    usedPrefix,
    command,
    text
}) => {
    conn.registrasi = conn.registrasi || {};
    if (conn.registrasi[m.chat]) return conn.reply(m.chat, 'Anda masih berada dalam sesi Registrasi', conn.registrasi[m.chat].msg)
    let user = global.db.data.users[m.sender];
    if (user.banned === true) throw `[💬] Kamu sudah dibanned\nMau unbanned? *${usedPrefix}unban <NUMBER>*`;
    if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`;
    const umurRandom = Math.floor(Math.random() * 100) + 1;
    const formatSalah = `⚠️ Format salah\n\n✳️ Penggunaan perintah : *${usedPrefix + command} nama.umur*\n📌Contoh : *${usedPrefix + command}* ${m.sender.split('@')[0]}.${umurRandom}`;
    if (!Reg.test(text)) throw formatSalah;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) throw "Nama tidak boleh kosong (Alphanumeric)";
    if (!age) throw "Umur tidak boleh kosong (Angka)";
    age = parseInt(age);
    if (age > 30) throw "*Gak boleh!*,\nTua amat dah 🗿";
    if (age < 5) throw "*Gak boleh!*,\nBanyak pedo 🗿";
    if (user.name && user.name.trim() === name.trim()) throw "Nama sudah dipakai";
    try {
        let sn = createHash("md5").update(m.sender).digest("hex");
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
        let pp = await conn.profilePictureUrl(who, "image").catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

        let caption = `
*VERIFIKASI BERHASIL*

• *Nama:* ${name}
• *Umur:* ${age} tahun
• *Serial Number (SN):* ${sn}

Terima kasih telah melakukan verifikasi. Data pengguna telah disimpan dengan aman di database bot. Data kamu sekarang sudah terverifikasi.

🚀 Sekarang kamu dapat menggunakan fitur-fitur khusus yang hanya tersedia untuk pengguna terverifikasi

Jika Kamu ingin menyimpan SN kamu,ketik .sn untuk mendapatkan Kode SN kamu,Jika kamu ingin unreg,ketik .unreg lalu kode SN kamu
`;

        const json = await createOtpCanvas(pp);
        let confirm = "💡 Reply pesan ini dengan mengetik kode OTP yang ada pada gambar!";
        let txt = `📝 *Registrasi* 📝\n\n@${m.sender.split('@')[0]}\n${confirm}\n\n_( Berlaku 1X )_`
        let msg = await conn.sendMessage(m.chat, {
            image: json.image,
            caption: txt,
            mentions: [m.sender],
        }, {
            quoted: m
        });
        conn.registrasi[m.chat] = {
            OTP: json.otp,
            VERIFIED: json.verified,
            CAPTION: caption,
            MSG: msg,
            NAME: name,
            AGE: age,
            timeout: setTimeout(() => {
                conn.sendMessage(m.chat, {
                    delete: msg.key
                });
                delete conn.registrasi[m.chat];
            }, 60 * 1000)
        }
    } catch (e) {
        console.log(e)
        await m.reply(eror)
    }
}
handler.help = ["daftar", "register"].map(v => v + " <nama>.<umur>");
handler.tags = ["xp"];
handler.command = /^(register|verify|daftar|reg(is)?|verif)$/i;

export default handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captcha = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=600&scaleHeight=200&fontsize=200&fillTextType=1&fillTextPattern=Warning!&text=${codetext}`;

    const res = await fetch(captcha); // Fetch the OTP image from FlamingText

    const captchaBuffer = Buffer.from(await res.arrayBuffer());

    const securityText = 'Success';
    const security = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=600&scaleHeight=200&fontsize=200&fillTextType=1&fillTextPattern=Warning!&text=${securityText}`;
    const res2 = await fetch(security); // Fetch the success image from FlamingText
    const securityBuffer = Buffer.from(await res2.arrayBuffer());

    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}