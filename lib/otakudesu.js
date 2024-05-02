import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'

const onGoing = async (p) => {
let res = await axios.get(`https://otakudesu.lol/ongoing-anime`)
let $ = cheerio.load(res.data)
let result = []
$('.venz').find('li > div.detpost').each(function(c, d) {
let judul = $(d).find('div.thumb > a > div.thumbz > h2.jdlflm').text()
let thumb = $(d).find('div.thumb > a > div.thumbz > img').attr('src')
let eps = $(d).find('div.epz').text()
let hri = $(d).find('div.epztipe').text()
let tgl = $(d).find('div.newnime').text()
result.push({ judul, thumb, eps, hri, tgl })
})
return result
}


export {
  onGoing
}