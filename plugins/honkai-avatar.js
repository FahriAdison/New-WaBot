import fetch from 'node-fetch'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!text) throw `‣ Example: ${usedPrefix + command} Bronya
  
*LIST CHARACTER*

- Acheron
- Argenti
- Arlan
- Asta
- Aventurine
- Bailu
- Blackswan
- Blade
- Bronya
- Clara
- Danhengil
- Danheng
- Drratio
- Firetrailblazer
- Fuxuan
- Gallagher
- Gepard
- Guinaifen
- Hanya
- Herta
- Himeko
- Hook
- Huohuo
- Jingyuan
- Jingliu
- Kafka
- Luka
- Luocha
- Lynx
- March7th
- Natasha
- Pela
- Physicaltrailblazer
- Qingque
- Ruanmei
- Sampo
- Seele
- Serval
- Silverwolf
- Sparkle
- Sushang
- Tingyun
- Topaz
- Welt
- Xueyi
- Yanqing
- Yukong
`
	let Maximus

	switch (text) {
		case 'acheron':
			Maximus = '1308'
			break
		case 'argenti':
			Maximus = '1302'
			break
		case 'arlan':
			Maximus = '1008'
			break
		case 'asta':
			Maximus = '1009'
			break
		case 'aventurine':
			Maximus = '1304'
			break
		case 'bailu':
			Maximus = '1211'
			break
		case 'blackswan':
			Maximus = '1307'
			break
		case 'blade':
			Maximus = '1205'
			break
		case 'bronya':
			Maximus = '1101'
			break
		case 'clara':
			Maximus = '1107'
			break
		case 'danhengil':
			Maximus = '1213'
			break
		case 'danheng':
			Maximus = '1002'
			break
		case 'drratio':
			Maximus = '1305'
			break
		case 'firetrailblazer':
			Maximus = '8003'
			break
		case 'fuxuan':
			Maximus = '1208'
			break
		case 'gallagher':
			Maximus = '1301'
			break
		case 'gepard':
			Maximus = '1104'
			break
		case 'guinaifen':
			Maximus = '1210'
			break
		case 'hanya':
			Maximus = '1215'
			break
		case 'herta':
			Maximus = '1013'
			break
		case 'himeko':
			Maximus = '1003'
			break
		case 'Hook':
			Maximus = '1109'
			break
		case 'huohuo':
			Maximus = '1217'
			break
		case 'jingyuan':
			Maximus = '1204'
			break
		case 'jingliu':
			Maximus = '1212'
			break
		case 'kafka':
			Maximus = '1005'
			break
		case 'luka':
			Maximus = '1111'
			break
		case 'luocha':
			Maximus = '1203'
			break
		case 'lynx':
			Maximus = '1110'
			break
		case 'march7th':
			Maximus = '1001'
			break
		case 'natasha':
			Maximus = '1105'
			break
		case 'pela':
			Maximus = '1106'
			break
		case 'physicaltrailblazer':
			Maximus = '8001'
			break
		case 'qingque':
			Maximus = '1201'
			break
		case 'ruanmei':
			Maximus = '1303'
			break
		case 'sampo':
			Maximus = '1108'
			break
		case 'seele':
			Maximus = '1102'
			break
		case 'serval':
			Maximus = '1103'
			break
		case 'silverwolf':
			Maximus = '1006'
			break
		case 'sparkle':
			Maximus = '1306'
			break
		case 'sushang':
			Maximus = '1206'
			break
		case 'tingyun':
			Maximus = '1202'
			break
		case 'topaz':
			Maximus = '1112'
			break
		case 'welt':
			Maximus = '1004'
			break
		case 'xueyi':
			Maximus = '1214'
			break
		case 'yanqing':
			Maximus = '1209'
			break
		case 'yukong':
			Maximus = '1207'
			break
		default:
			throw `Karakter yang dicari tidak ada atau belum tersedia.

*LIST CHARACTER*

- Acheron
- Argenti
- Arlan
- Asta
- Aventurine
- Bailu
- Blackswan
- Blade
- Bronya
- Clara
- Danhengil
- Danheng
- Drratio
- Firetrailblazer
- Fuxuan
- Gallagher
- Gepard
- Guinaifen
- Hanya
- Herta
- Himeko
- Hook
- Huohuo
- Jingyuan
- Jingliu
- Kafka
- Luka
- Luocha
- Lynx
- March7th
- Natasha
- Pela
- Physicaltrailblazer
- Qingque
- Ruanmei
- Sampo
- Seele
- Serval
- Silverwolf
- Sparkle
- Sushang
- Tingyun
- Topaz
- Welt
- Xueyi
- Yanqing
- Yukong`
	}
	let data = await fetch(`https://raw.githubusercontent.com/FortOfFans/HSR/main/avatarSheet/${Maximus}.png`)
	let image = await data.buffer()

	conn.sendFile(m.chat, image, null, `${capitalizeFirstLetter(text)} - Honkai: Star Rail - Avatar`, m)
}

handler.help = ['hsravatar']
handler.tags = ['honkai']
handler.command = ['hsravatar']
handler.register = true;
handler.limit = true

export default handler

function capitalizeFirstLetter(str) {
	let words = str.split(" ")
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
	}

	return words.join(" ")
}