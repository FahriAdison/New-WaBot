const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
import moment from "moment-timezone"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    command
}) => {
    await conn.sendReact(m.chat, "⏳", m.key)
    let soun = ["aku-ngakak",
        "anjay",
        "ara-ara2",
        "ara-ara-cowok",
        "ara-ara",
        "arigatou",
        "assalamualaikum",
        "asu",
        "ayank",
        "bacot",
        "bahagia-aku",
        "baka",
        "bansos",
        "beat-box2",
        "beat-box",
        "biasalah",
        "bidadari",
        "bot",
        "buka-pintu",
        "canda-anjing",
        "cepetan",
        "china",
        "cuekin-terus",
        "daisuki-dayo",
        "daisuki",
        "dengan-mu",
        "Donasiku",
        "gaboleh-gitu",
        "gak-lucu",
        "gamau",
        "gay",
        "gelay",
        "gitar",
        "gomenasai",
        "hai-bot",
        "hampa",
        "hayo",
        "hp-iphone",
        "ih-wibu",
        "i-like-you",
        "india",
        "karna-lo-wibu",
        "kiss",
        "kontol",
        "ku-coba",
        "maju-wibu",
        "makasih",
        "mastah",
        "menuasli",
        "menuku",
        "menu",
        "MenuYuki",
        "nande-nande",
        "nani",
        "ngadi-ngadi",
        "nikah",
        "nuina",
        "onichan",
        "ownerku",
        "owner-sange",
        "pak-sapardi",
        "pale",
        "pantek",
        "pasi-pasi",
        "punten",
        "sayang",
        "siapa-sih",
        "sudah-biasa",
        "summertime",
        "tanya-bapak-lu",
        "to-the-bone",
        "wajib",
        "waku",
        "woi",
        "yamete",
        "yowaimo",
        "yoyowaimo"
    ].getRandom()
    let vn = "https://raw.githubusercontent.com/AyGemuy/HAORI-API/main/audio/" + soun + ".mp3"
    let ppl = await( await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
    const text = `*\`🌟 Selamat datang di dashboard bot Marin-Kitagawa\`*!\n`
    const caption = `> ────────────────\n         Perkenalkan Saya Adalah Bot Marin,Saya harap Anda menikmati pengalaman pertama berinteraksi dengan saya,mohon diingat saya hanyalah seorang bot bukan orang biasa yang bisa chatan seperti orang pada umumnya,saya hanya merespon terhadap command yang diberikan${readMore}\n\nSaya telah menyertakan berbagai fitur untuk membantu Anda dalam hal yang inginn dibutuhkan dalam bot.\n\n         Semoga Anda menikmati menggunakan dashboard dari saya dan mendapatkan manfaat dari fitur-fitur yang saya tawarkan.\n> ────────────────`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
              "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: caption.trim()
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: me
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ video : { url: 'https://telegra.ph/file/a481b43032eba628ffbeb.mp4'}}, { upload: conn.waUploadToServer})), 
                  title: text,
                  gifPlayback: true,
                  subtitle: me,
                  hasMediaAttachment: false  
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
    {
        "name": "cta_url",
        "buttonParamsJson": "{\"display_text\":\"GITHUB\",\"url\":\"https://www.github.com/FahriAdison\",\"merchant_url\":\"https://www.github.com/FahriAdison\"}"
    },
    {
                 "name": "cta_call",
                 "buttonParamsJson": "{\"display_text\":\"HUBUNGI\",\"id\":\"082268003229\"}"
                 },
    {
        "name": "quick_reply",
        "buttonParamsJson": "{\"display_text\":\"ALL MENU\",\"id\":\".allmenu\"}"
    }
],
                }),
                contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363272269077450@newsletter',
                  newsletterName: '© M a r i n  K i t a g a w a',
                  serverMessageId: 143
                }
              }
              })
          }
        },
      }, {})
      
      await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
        })
        await conn.sendReact(m.chat, "✅", m.key)
    }


handler.help = ["menu", "?"]
handler.tags = ["general"]
handler.command = /^(menu|\?)$/i

handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
    let waktunya = moment.tz("Asia/Makassar").format("HH");
    return waktunya >= 24 ? "Selamat Begadang 🗿" :
        waktunya >= 18 ? "Selamat malam 🌙" :
        waktunya >= 15 ? "Selamat sore 🌅" :
        waktunya > 10 ? "Selamat siang ☀️" :
        waktunya >= 4 ? "Selamat pagi 🌄" :
        "Selamat Pagi 🗿";
}