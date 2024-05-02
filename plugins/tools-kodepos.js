import axios from 'axios'
import cheerio from 'cheerio'
import https from 'https'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) return m.reply(`Masukkan nama kota!\n\nContoh:\n${usedPrefix + command} palembang`)
    try {
        let res = await kodepos(text)
        if (!res.length) return m.reply(`Kota ${text} tidak ditemukan!`)
        let cap = res.map((v, i) => {
            return `
*${i + 1}.* ${v.province}
  > Kota: _${v.city}_
  > Wilayah: _${v.subdistrict}_
  > Perkotaan: _${v.urban}_
  > Kode Pos: _${v.postalcode}_
`.trim()
        }).join('\n\n')
        m.reply(cap)
    } catch (error) {
        m.reply(`Error: ${error}`)
    }
}

handler.help = ['kodepos'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = ['kodepos']
handler.register = true
handler.limit = true
export default handler

async function kodepos(kota) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = `https://carikodepos.com/?s=${kota}`
            let { data } = await axios.get(url, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) })
            let $ = cheerio.load(data)
            let search = $('tr')
            if (!search.length) return reject('Tidak ada hasil yang ditemukan')
            let results = []
            search.each(function(i) {
                if (i != 0) {
                    let td = $(this).find('td')
                    let result = {}
                    td.each(function(i) {
                        let value = $(this).find('a').text().trim()
                        let key = (i == 0) ? 'province' : (i == 1) ? 'city' : (i == 2) ? 'subdistrict' : (i == 3) ? 'urban' : 'postalcode'
                        result[key] = value
                    })
                    results.push(result)
                }
            })
            resolve(results)
        } catch (error) {
            reject(error.message)
        }
    })
}