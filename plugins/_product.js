const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia
} = (await import('@adiwajshing/baileys')).default
import fs from 'fs'

 let handler = async ( m, {  conn, usedPrefix: _p } ) => {
  
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/me.png') }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "7072001572901676",
			"title": me,
			"description": `tes`,
			"currencyCode": "JPY",
			"bodyText": `tes`,
			"footerText": `tes`,
			"priceAmount1000": "1945000",
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": "1945000",
			"retailerId": "idk",
			"url": "wa.me/6285767373425"
		},
			"businessOwnerJid": "6285767373425@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: m })
  await conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}

handler.command = /^(product)$/i

export default handler