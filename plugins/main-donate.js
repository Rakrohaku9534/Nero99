
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *DANA*
• *Nomor :* 085786539008 

▢ *SUBSCRIBE*
• _Dengan subscribe dan tonton video saya, sudah cukup membantu berdonasi, Terima kasih_
`
let img = 'https://telegra.ph/file/9f1c675b22c865fd94543.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
