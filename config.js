/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285786539008', 'Fahrul', true],
  ['6285786539008'], 
  ['6285786539008'],
  ['6285786539008']
] // Nomor Owner

global.mods = ['6285786539008'] 
global.prems = ['6285786539008', '6285786539008', '6285786539008']

// Harus di isi
global.btc = 'xPQzgABf' // https://api.botcahx.live
global.lann = 'chuDEfcB' // https://api.betabotz.org

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'chuDEfcB'
}

// Sticker WM
global.nans = 'ZERO MD BY FAHRUL'
global.packname = 'ZERO MD┃ᴮᴼᵀ' 
global.author = '@fahrul' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/fahrul_mt\n' 
global.dygp = 'https://chat.whatsapp.com/KLbE1i5U4y9I0OVli5jcKM'
global.fgsc = 'https://github.com/Rakrohaku9534' 
global.fgyt = 'http://fahrul.me/'
global.fgpyp = '-'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})