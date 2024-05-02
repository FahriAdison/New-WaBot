//idk

let handler  = async (m, { conn }) => {
 await conn.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: me,
  currencyCodeIso4217: 'JPY',
  requestFrom: '855387895949@s.whatsapp.net',
  expiryTimestamp: 8600,
  amount: 10000,
  background: thumb
}}}}, {})
}

handler.command = /^pay$/i
export default handler