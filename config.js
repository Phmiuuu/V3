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
  ['6289687537657', 'MADARA UCHIHA', true],
  ['6281992544400']
] // Nomor Owner

global.mods = ['6289687537657'] 
global.prems = ['6289687537657', '6281992544400']

// apikey
global.lann = 'PhmiFz'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'PhmiFz'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'MADARA UCHIHA' // nama owner
global.nomor = '6289687537657' // nomor owner
global.nans = 'MADARA UCHIHA' // nama bot 
global.thumb = 'https://i.ibb.co/hdwWtNp/20230924-135710.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/L2tu5aUrhpPLWCgmTGRtLj' // link group yang ada di menu

// Sticker wm
global.packname = 'MADARA UCHIHA┃ᴮᴼᵀ' 
global.author = '@phmifz' 
global.fgig = 'https://www.instagram.com/basrenggood' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/Phmiuuu' // bebas tapi jangan kosong
global.fgyt = 'https://phmifz.my.id/' // bebas tapi jangan kosong
global.fgpyp = 'https://phmifz.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6289687537657'
global.qris = 'https://i.ibb.co/mNJkTmB/dana.jpg'
global.web = 'https://nansoffc.my.id'
global.email = 'phmifz@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ᴘʜᴍɪ ᴏꜰꜰᴄ'

global.wait = 'Tunggu sebentar....'
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