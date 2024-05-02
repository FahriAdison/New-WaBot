import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile, readFileSync } from 'fs'
import moment from "moment-timezone"

async function loadConfig() {
global.owner = [['+6285767373425', 'jhnspntx', true],['62895612153565'], ['6282268003229'], ['6283820073017'],['6283850230191'],["6283825536262"],['6285179855248']]
 // ['6283820073017', '436506665652696', '6285240750713']
  // [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = [] // Want some help? nothing
global.prems = ['6285643029355', '19292452222', '+19294535720', '62838399233855'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  marin: 'https://api.marinkitagawa.toys'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.marinkitagawa.toys': 'admin123' 
}

/* global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]
*/

//===========> FLAMINGTEXT <==============//
global.fla = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']


//===========> Sticker WM <==============//
global.packname = `\t\t「 Simple Bot Whatsapp 」\n\t\t「 By : Kitagawa Marin Bot 」\n\t\t\t\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
global.author = ''

//===========> IMAGE <==============//
global.thumb = readFileSync('./image/me.png')
global.thumb2 = readFileSync('./image/me2.png')
global.multiplier = 69 // The higher, The harder levelup

//===========> DOC <==============//
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'
global.hwaifu = ['https://telegra.ph/file/a3bd959e8cf3131be2213.jpg']



//===========> RANDOM <==============//
global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "⛥", "✗", "⚜", "⚚", "♪"])
global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"])
global.cmenut = htjava + "───『"
global.cmenuh = "』───" + htjava
global.cmenub = "│" + pmenus
global.cmenuf = "╰──────────⳹"
global.dmenut = htjava + "───『"
global.dmenub = "│" + pmenus
global.dmenub2 = "│" + pmenus
global.dmenuf = "╰──────────⳹"
global.dashmenu = "☰ *D A S B O A R D* ☰"
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)

//===========> APIKEY MARIN <==============//
global.marin = "admin123"
global.chara = "mOuKD3RdUXdqnaRRKjm8An-VwdRmJyD4KdCikYEwHEM"
//===========> BAGIAN TEXT <==============//
global.namaowner = 'JhnsPntx'
global.me = 'Created By JhnsPntx'
global.ownerbot = "6285767373425"
global.nomorbot = '6289637133848'
global.namebot = 'Kitagawa Marin'
global.wait = "_In progress, please wait..._"
global.yt = "bit.ly/Papah-Chan"
//WAJIB DIUBAH SESUAI SAMA DI OWNER-CREATEPANEL.JS
global.egg = "YOUR EGG PANEL"
global.location3 = "YOUR LOCATION PANEL"
//JIKA BINGUNG HUBUNGI OWNER SC
global.str = '-------------------------------'
global.l = '「'
global.r = '」'
global.error = 'Fitur Ini Sedang Error\nSegera Hubungi Owner Agar Diperbaiki'
global.eror = 'Fitur Ini Sedang Error\nSegera Hubungi Owner Agar Diperbaiki'
global.botdate = `${htjava} Date :  ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}`
//===========> fake <==============//
global.fsizedoc = SizeDoc()
global.fpagedoc = PageDoc()

//===========> THUMBNAIL <==============//
global.fla = pickRandom(ImgLogo())
global.flaaa = ImgLogo()
global.ucapan = Pagi()
global.fakes = Fakes()
//===========> Img Array <==============//
function ImgLogo() {
    let LoGo = [
"https://dynamic.brandcrowd.com/asset/logo/04ca85c5-a4c1-4582-8296-7fb8cbdf7df1/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/063a3d53-d7bb-4abb-8b20-3e45ae7c61ac/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/09699c93-f687-4c58-b6dc-cb8010de7df9/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/097b9969-5019-433a-9a3f-d2e097b50e99/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/0c963355-e735-4cdd-bec8-1373ba2a222e/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/0cd45dda-e1e6-46bc-9f0d-b49a5d3c3667/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/10cd8160-2b8d-41c5-87cc-f683a853d5d9/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/163db786-9e2a-494a-a996-de565ae52f83/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/1e47fc81-0c56-45d5-aa5e-07006260dfbc/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/1fd728fb-fdb3-4407-a7da-fe55bfcb5fb0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/236a12ee-2b79-4b58-b9e4-5536f5e93db7/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/2648d66c-fec5-488f-9626-06991ca917e0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/362270db-6933-4ccc-8c11-25b2fe97f023/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/4a0312ef-6f47-421d-9d10-354c27de8e0f/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/50dd554f-ffed-4496-b770-870fef2aefe5/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/5ed1f95d-736f-4fe3-9aec-d0a8875dee17/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/672fc6e7-e445-47e3-9391-2e1d1452960a/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/7229c0d6-cc4f-4e47-87b2-3b01285f502d/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/73113e56-8ac2-484e-9272-06759b7d51e2/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/7429f9b9-562f-439b-86cd-81f04d76d883/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/746604d3-8da9-4488-8fa9-bf301d62ea0e/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/867bea51-793c-4b09-b13f-44c9053b6754/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/882f41c2-98ee-43f2-bf07-f033cf1c3320/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8a2d089b-7b87-4979-906e-7731b594bd4b/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8bb23d1a-7fb2-4f5d-ba6c-2a9bd13cc673/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8dcc7e92-c12c-40df-8c8b-9f9db93b11a0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8f825f13-dadf-442c-b9e5-a1daa03611c4/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/912b6462-49d3-435a-959e-5c5f3254d6c4/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/924d12da-4a2b-46b3-82cd-bc9b38a519d0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/9459965a-f378-430a-8cb9-62778fec5713/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/9608708e-7907-4bae-892c-87964aee0454/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/99c6feef-cee4-47b3-afc7-1f192e7f48f4/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/a075034f-0363-4af4-877f-aba47a7c059d/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/a428ed89-5ed1-4b1d-b095-2ee98ae54b40/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/afa0be93-d4ae-46d5-b741-64bd3b4b6148/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b0fb81f5-59a4-4197-947f-26037441ea2f/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b1826077-0a6f-403d-939e-b445c334c470/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b3581ffd-a127-465b-b880-bd3770b85aad/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b5be66f6-a6a6-42dc-ab67-de8f80e96291/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b5e150af-101d-4e96-9518-dff66548dc31/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b8b4fc21-d1b6-4ee1-a6f3-4410a49e123a/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b95516e4-645d-4249-b81b-b9ca65bd2087/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b97103b8-3b7c-4f1d-8c91-451c11e8cde3/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/bbf8e7fe-13c2-420c-bb2c-9c059744d599/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/bd9069cc-408d-4f00-90b4-9d6c96bc0b3d/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/be638691-3065-45cb-b90c-263945cd0177/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/c054d202-df4b-466d-8477-2b8690030ce5/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/cc9a22ce-f65c-40ff-9eac-43c26817f44a/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/e32a0e7e-df48-4b33-bccf-1f74d395d322/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/ee1930f1-09a8-4d5e-bbe9-e43547bb7f64/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/fde5293a-c69b-4d77-9ec8-f3d6797d2b15/logo?v=4&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
    return LoGo
}
/*===============> Fake Reply <==============*/
/* Apa Kabar */
function ThumbUrl() {
    let Turl = pickRandom([
"https://i.pinimg.com/236x/f8/19/88/f819887d6b740420bde71c866ad22154.jpg",
  "https://i.pinimg.com/564x/9e/35/a3/9e35a3e94ce80399d8faded8e88a95f8.jpg",
  "https://i.pinimg.com/236x/c9/d6/b3/c9d6b39738ac793d32e4b5e06a3adbb7.jpg",
  "https://i.pinimg.com/236x/28/95/9c/28959c030ba3d23d564a0eee0206bb5c.jpg",
  "https://i.pinimg.com/236x/f5/f6/ad/f5f6ad8ddb24f63e772d8bc242edc5e7.jpg",
  "https://i.pinimg.com/236x/c0/99/d2/c099d2e16f14baf2ca9f6d10fdd16f90.jpg",
  "https://i.pinimg.com/236x/64/99/c8/6499c80cf33356ae83ff87d6b465d9ac.jpg",
  "https://i.pinimg.com/236x/2a/d6/e4/2ad6e41fe12168fa04f1307badaf70f1.jpg",
  "https://i.pinimg.com/236x/4d/63/f7/4d63f7fe2f79411e3ba8c7f7b048cd55.jpg",
  "https://i.pinimg.com/236x/88/c8/f8/88c8f882edf3b48ea4788dfc517c73e9.jpg",
  "https://i.pinimg.com/236x/3d/4f/fe/3d4ffe1f3cd68f150e0c0caecabcc4b7.jpg",
  "https://i.pinimg.com/236x/6c/d8/cf/6cd8cf405736834ea90aeca68ed29169.jpg",
  "https://i.pinimg.com/236x/4c/ff/f6/4cfff6b25ec919e431fb9a1ce064ac08.jpg",
  "https://i.pinimg.com/236x/24/78/22/24782270a9c48f013bb48de4ac773a17.jpg",
  "https://i.pinimg.com/236x/7b/4f/27/7b4f2710116972a24bba76ca0639eb9a.jpg",
  "https://i.pinimg.com/236x/e7/7d/77/e77d778ed8075142bd7710ac3c6be3f9.jpg",
  "https://i.pinimg.com/236x/37/07/36/370736967beee002dadafe7c4d2ed107.jpg",
  "https://i.pinimg.com/236x/71/70/f8/7170f8e5c644bc6114645947ae5e4dda.jpg",
  "https://i.pinimg.com/236x/10/d9/d9/10d9d914e0be1e0dbe6d4a9a0492cd2c.jpg",
  "https://i.pinimg.com/236x/46/d3/46/46d346f2ed8e938360b24eafe569b417.jpg",
  "https://i.pinimg.com/236x/59/79/a1/5979a16b0fa476b9fbc356a29925feb8.jpg",
  "https://i.pinimg.com/236x/e1/50/ba/e150ba12267666f82f408afb251fb6d7.jpg",
  "https://i.pinimg.com/236x/bd/02/78/bd027842a166ecf6ca43261b25bf71e6.jpg",
  "https://i.pinimg.com/236x/e2/de/9d/e2de9d9da93c66c11f764eb8ebaee5db.jpg",
  "https://i.pinimg.com/236x/c8/89/4b/c8894ba41cbaef477b5b8bcabe1544d1.jpg",
  "https://i.pinimg.com/236x/b6/0e/0a/b60e0adbdf2cd3b0658383e6cccc8ef3.jpg",
  "https://i.pinimg.com/236x/fc/36/f2/fc36f2b83a8c2d06d9566ecadc3a5b9d.jpg",
  "https://i.pinimg.com/564x/09/37/10/0937102c60c6fa5c45e15b34e96bce0f.jpg",
  "https://i.pinimg.com/236x/b6/ea/bc/b6eabca3d56f6073502c329a2e8a1198.jpg",
  "https://i.pinimg.com/236x/c9/66/8b/c9668bfc0468128025ab2909ac6de3ec.jpg",
  "https://i.pinimg.com/236x/d2/52/c5/d252c5d54c69b4a735290660692c6a4c.jpg",
  "https://i.pinimg.com/236x/97/80/68/97806855fee796add79018c8d702a8ef.jpg",
          "https://i.pinimg.com/236x/3e/35/5a/3e355a799e2d82945fb052d4050c8e0f.jpg"
])
    return Turl
}
function Fakes() {
    let Org = pickRandom(["0", "6285767373425"])
    let Parti = pickRandom([Org + "@s.whatsapp.net", Org + "@c.us"])
    let Remot = pickRandom(["status@broadcast", "120363047752200594@g.us"])
    let Hai = pickRandom(["Apa kabar ", "Halo ", "Hai "])
    let Sarapan = "👋 " + Hai + Pagi()
    let Thum = ThumbUrl()
    let fpayment = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            requestPaymentMessage: {
                currencyCodeIso4217: "USD",
                amount1000: SizeDoc(),
                requestFrom: Parti,
                noteMessage: {
                    extendedTextMessage: {
                        text: Sarapan
                    }
                },
                expiryTimestamp: SizeDoc(),
                amount: {
                    value: SizeDoc(),
                    offset: SizeDoc(),
                    currencyCode: "USD"
                }
            }
        }
    }
    let fpoll = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            pollCreationMessage: {
                name: Sarapan
            }
        }
    }
    let ftroli = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            orderMessage: {
                itemCount: SizeDoc(),
                status: 1,
                surface: 1,
                message: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
                orderTitle: Sarapan,
                sellerJid: Parti
            }
        }
    }
    let fkontak = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            contactMessage: {
                displayName: Sarapan,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Sarapan},;;;\nFN:${Sarapan},\nitem1.TEL;waid=${ownerbot.split("@")[0]}:${ownerbot.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
                jpegThumbnail: Thum,
                thumbnail: Thum,
                sendEphemeral: true
            }
        }
    }
    let fvn = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            audioMessage: {
                mimetype: "audio/ogg; codecs=opus",
                seconds: SizeDoc(),
                ptt: true
            }
        }
    }
    let fvid = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            videoMessage: {
                title: Sarapan,
                h: Sarapan,
                seconds: SizeDoc(),
                caption: Sarapan,
                jpegThumbnail: Thum
            }
        }
    }
    let ftextt = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            extendedTextMessage: {
                text: Sarapan,
                title: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
                jpegThumbnail: Thum
            }
        }
    }
    let fliveLoc = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            liveLocationMessage: {
                caption: Sarapan,
                h: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
                jpegThumbnail: Thum
            }
        }
    }
    let ftoko = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            productMessage: {
                product: {
                    productImage: {
                        mimetype: "image/jpeg",
                        jpegThumbnail: Thum
                    },
                    title: Sarapan,
                    description: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
                    currencyCode: "USD",
                    priceAmount1000: SizeDoc(),
                    retailerId: "Ghost",
                    productImageCount: 1
                },
                businessOwnerJid: Parti
            }
        }
    }
    let fdocs = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            documentMessage: {
                title: Sarapan,
                jpegThumbnail: Thum
            }
        }
    }
    let fgif = {
        key: {
            participant: Parti,
            remoteJid: Remot
        },
        message: {
            videoMessage: {
                title: Sarapan,
                h: Sarapan,
                seconds: SizeDoc(),
                gifPlayback: true,
                caption: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`,
                jpegThumbnail: Thum
            }
        }
    }
    return pickRandom([fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn])
}

function SizeDoc() {
    return Math.pow(10, 15)
}
function PageDoc() {
    return Math.pow(10, 10)
}
//===========> BAGIAN RPG <==============//
/*Emoji*/
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            Fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            griffin: "🦒",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}

//===========> Randomizer <==============//
/* Selamat Pagi */
function Pagi() {
    let waktunya = moment.tz("Asia/Jakarta").format("HH")
    let ucapin = "Selamat malam 🌙"
    if (waktunya >= 1) {
        ucapin = "Selamat Pagi 🗿"
    }
    if (waktunya >= 4) {
        ucapin = "Selamat pagi 🌄"
    }
    if (waktunya > 10) {
        ucapin = "Selamat siang ☀️"
    }
    if (waktunya >= 15) {
        ucapin = "Selamat sore 🌅"
    }
    if (waktunya >= 18) {
        ucapin = "Selamat malam 🌙"
    }
    if (waktunya >= 24) {
        ucapin = "Selamat Begadang 🗿"
    }
    return ucapin
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.cyanBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
}
export {
    loadConfig
}
