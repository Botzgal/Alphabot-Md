const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api (jgn di ganti tomlol)
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey (Apikey expired silahkan login terus ganti V12 dgn apikey lu)
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // 👉 login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read message
global.autobio = true 
global.userRegister = false 
global.autoblok212 = false //ubah jadi true biar nmr 212 di blok sama bot

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "𝖋𝖆𝖓𝖘𝖌𝖆𝖑𝖚𝖍𝖇𝖔𝖙" //namabot kalian
global.ownername= "𝕲𝖆𝖑𝖚𝖍 𝖔𝖜𝖓𝖊𝖗" //nama kalian
global.myweb ="https://chat.whatsapp.com/FxhPGFS8ZhL9E4nhk1X7Rg" //bebas asal jan hapus
global.youtube = "https://chat.whatsapp.com/FxhPGFS8ZhL9E4nhk1X7Rg" //bebas asal jan hapus
global.github = "https://chat.whatsapp.com/FxhPGFS8ZhL9E4nhk1X7Rg" //bebas
global.email = "zeeoneofc@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6285804081500'] //premium user
global.owner = ["6285804081500","85804081500"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6285804081500" // nomor wa kalian
global.ownernomerr = "+6285804081500" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© Hai puki' //sticker wm ubah
global.author = 'jangan lupa donasi ya              𝔊𝔞𝔩𝔲𝔥𝔟𝔬𝔱_𝔪𝔡 𝔠𝔬𝔪𝔢𝔩' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: '*Emang lu admin ngab..?,Bukan jadi gk bisa command 🗿*',
    botAdmin: '*Bot Harus menjadi admin terlebih dahulu*',
    owner: '*mau ngapain..?,Lu bukan owner gw*',
    group: '*cuma bisa di grup cuy.. !*',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ *loading* Sabar ngab ',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
