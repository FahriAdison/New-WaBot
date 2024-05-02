import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukan Nama Character!\n\nExample\n${usedPrefix + command} Hu Tao`)
    let api = await fetch(`https://genshin-db-api.vercel.app/api/characters?query=${text}&matchCategories=true&dumpResult=true&queryLanguages=English&resultLanguage=Indonesian`)
    let { match } = await api.json()
    if (/build(gi|genshin)/i.test(command)) {
        switch (match) {
            case 'Amber':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Amber.jpg', `${match}.jpg`, `Here Build Support For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Amber.jpg', `${match}.jpg`, `Here Another Build Main Dps For ${match}`, m)
                break
            case 'Barbara':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Barbara.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Beidou':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Beidou.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Bennett':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Bennett.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Chongyun':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Chongyun.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Diluc':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Diluc.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Fischl':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Fischl.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Jean':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Jean.jpg', `${match}.jpg`, `Here Build Healer For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Jean.jpg', `${match}.jpg`, `Here Another Burst Dps Build For ${match}`, m)
                break
            case 'Kaeya':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Kaeya.jpg', `${match}.jpg`, `Here Build Sub Dps For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Kaeya.jpg', `${match}.jpg`, `Here Another Support Build For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Kaeya.jpg', `${match}.jpg`, `Here Another Build Main Dps For ${match}`, m)
                break
            case 'Keqing':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Keqing_Electro.jpg', `${match}.jpg`, `Here Build Electro For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Keqing_Physical.jpg', `${match}.jpg`, `Here Another Build Physical For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Aggravate/Character_Keqing_Quicken.jpg', `${match}.jpg`, `Here Another Build Quicken For ${match}`, m)
                break
            case 'Klee':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Klee.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Lisa':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Lisa.jpg', `${match}.jpg`, `Here Build Sub Dps For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Lisa.jpg', `${match}.jpg`, `Here Another Build Support For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Lisa.jpg', `${match}.jpg`, `Here Another Build Main Dps For ${match}`, m)
                break
            case 'Mona':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Mona.jpg', `${match}.jpg`, `Here Build Burst Dps For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Mona_Nuke.jpg', `${match}.jpg`, `Here Another Build Mona Nuke For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Mona_Freeze.jpg', `${match}.jpg`, `Here Another Build Mona Freeze For ${match}`, m)
                break
            case 'Ningguang':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Ningguang.jpg', `${match}.jpg`, `Here Build Main Dps For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Ningguang.jpg', `${match}.jpg`, `Here Another Build Burst Dps For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'saya', `${match}.jpg`, `Here Another Build For ${match}`, m)
                break
            case 'Noelle':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Noelle.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Qiqi':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Qiqi.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Razor':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Razor.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Sucrose':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Sucrose.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Traveler':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Traveler_Geo.jpg', `${match}.jpg`, `Here Build For ${match} Geo`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Traveler_Anemo.jpg', `${match}.jpg`, `Here Build For ${match} Anemo`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Traveler_Dendro.jpg', `${match}.jpg`, `Here Build For ${match} Dendro`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Traveler_Electro.jpg', `${match}.jpg`, `Here Build For ${match} Electro`, m)
                break
            case 'Venti':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Venti.jpg', `${match}.jpg`, `Here Build Support For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Venti.jpg', `${match}.jpg`, `Here Another Build Burst Dps For ${match}`, m)
                break
            case 'Xiangling':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Xiangling.jpg', `${match}.jpg`, `Here Build Support For ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Xiangling.jpg', `${match}.jpg`, `Here Another Build  Main DpsFor ${match}`, m)
                await delay(2000)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Xiangling.jpg', `${match}.jpg`, `Here Another Build Burst Dps For ${match}`, m)
                break
            case 'Xingqiu':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Xingqiu.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Diona':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Diona.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Tartaglia':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Tartaglia.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Xinyan':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Xinyan.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Zhongli':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Zhongli.jpg', `${match}.jpg`, `Here Build Support For ${match}`, m)
                await delay(1500)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Zhongli.jpg', `${match}.jpg`, `Here Another Build Burst Dps For ${match}`, m)
                break
            case 'Albedo':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Albedo.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Ganyu':
                conn.sendFile(m.chat, 'https://telegra.ph/file/1a51adbe37e63a7afea6a.jpg', `${match}.jpg`, `Here Build Main Dps Melt For ${match}`, m)
                await delay(1500)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Ganyu_Freeze.jpg', `${match}.jpg`, `Here Another Build Main Dps For ${match}`, m)
                break
            case 'Hu Tao':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_HuTao.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Xiao':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Xiao.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Rosaria':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Rosaria.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Eula':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Eula.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Yanfei':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Yanfei.jpg', `${match}.jpg`, `Here Build Main Dps For ${match}`, m)
                await delay(1500)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Yanfei.jpg', `${match}.jpg`, `Here Another Build Support For ${match}`, m)
                await delay(1500)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Yanfei.jpg', `${match}.jpg`, `Here Another Build Sub Dps For ${match}`, m)
                break
            case 'Kaedehara Kazuha':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Kazuha.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Kamisato Ayaka':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Ayaka.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Sayu':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Sayu.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Yoimiya':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Yoimiya.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Aloy':
                conn.sendFile(m.chat, 'https://telegra.ph/file/33809d8ab39eff34c8ab3.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Kujou Sara':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Sara.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Raiden Shogun':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Raiden.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Sangonomiya Kokomi':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Kokomi.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Thoma':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Thoma.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Arataki Itto':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Itto.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Gorou':
                conn.sendFile(m.chat, 'https://github.com/FortOfFans/FortOfFans.github.io/blob/main/Characters/en-US/Support/Character_Gorou.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Shenhe':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Shenhe.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Yun Jin':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_YunJin.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Yae Miko':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Burst%20DPS/Character_Yae.jpg', `${match}.jpg`, `Here Build Burst Dps For ${match}`, m)
                await delay(1500)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Aggravate/Character_Yae.jpg', `${match}.jpg`, `Here Build Aggravate For ${match}`, m)
                break
            case 'Kamisato Ayato':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Ayato.jpg', `${match}.jpg`, `Here Build Sub Dps For ${match}`, m)
                break
            case 'Yelan':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Sub%20DPS/Character_Yelan.jpg', `${match}.jpg`, `Here Build Sub Dps For ${match}`, m)
                break
            case 'Kuki Shinobu':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Shinobu.jpg', `${match}.jpg`, `Here Build Healer For ${match}`, m)
                await delay(1500)
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Shinobu.jpg', `${match}.jpg`, `Here Build Support For ${match}`, m)
                break
            case 'Shikanoin Heizou':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Heizou.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Tighnari':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Driver/Character_Tighnari.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Collei':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Collei.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Dori':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Dori.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Nilou':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Nilou.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Cyno':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Cyno.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Candace':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Candace.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Nahida':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Nahida.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Layla':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Layla.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Wanderer':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Wanderer.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Faruzan':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Faruzan.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Alhaitham':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Alhaitham.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Yaoyao':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Yaoyao.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Dehya':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Main%20DPS/Character_Dehya.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Mika':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Mika.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Baizhu':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Healer/Character_Baizhu.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Kaveh':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Driver/Character_Kaveh.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            case 'Kirara':
                conn.sendFile(m.chat, 'https://raw.githubusercontent.com/FortOfFans/FortOfFans.github.io/main/Characters/en-US/Support/Character_Kirara.jpg', `${match}.jpg`, `Here Build For ${match}`, m)
                break
            default:
                return m.reply(`Character ${text} Tidak Ditemukan`)
        }
    }
}
handler.help = ['buildgi']
handler.tags = ['genshin']
handler.command = /^(build(gi|genshin))$/i
handler.register = true;
handler.limit = true

export default handler;

const delay = time => new Promise(res => setTimeout(res, time))