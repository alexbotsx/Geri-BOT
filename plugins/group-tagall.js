let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `👑@𝔠𝔢𝔬𝔤𝔢𝔯𝔦𝔭𝔦𝔲𝔪.𝔡𝔷𝔫 ${pesan}`
  let teks = `𝙂𝙚𝙧𝙞𝙈𝙞𝙖𝙪 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖 𝘽𝙤𝙠 🫦
${oi}\n\n 😽𝙀𝙩𝙞𝙦𝙪𝙚𝙩𝙖😸\n`
  for (let mem of participants) {
  teks += `🍫🍭@${mem.id.split('@')[0]}\n`}
  teks += `  ֶָGeriMiau`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|sia)$/i
  handler.admin = true
  handler.group = true
  export default handler