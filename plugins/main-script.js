// Note : Jangan hapus text di bawah, di tambahin boleh, asalkan jangan di hapus.

import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT BOT*

▢ _*SCRIPT BOT BY PHMI OFFC*_
➠ Owner : Phmi
➠ YouTube : PHMI OFFC
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler