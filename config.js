const fs = require("fs")
const chalk = require("chalk")
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

global.autoTyping = process.env.OWNER_NAME || false, 
global.autoRecord = process.env.OWNER_NAME || false, 

global.Owner = process.env.OWNER_NUMBER || ['']
global.OwnerNumber = process.env.OWNER_NUMBER || ['']
global.ownertag = process.env.OWNER_NUMBER || ['']
global.BotName = "Marin"
global.dev = "917044585369"
global.packname = process.env.PACK_INFO.split(";")[1] || 'Marin',
global.author = process.env.PACK_INFO.split(";")[0] || 'Marin Kitigawa',
global.OwnerName = process.env.OWNER_NAME || '',
global.BotSourceCode = "https://github.com/AshAritra/Marin-152"
global.SupportGroupLink = ""
global.sessionName = 'session',
global.port= process.env.PORT || 8000
global.prefa = process.env.PREFIX || ['-'] 


global.location = process.env.LOCATION || "West Bengal, India",
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://media.tenor.com/nV_hpJT8ppwAAAAC/marin.gif' }
global.websitex = "https://mistdrag4682.blogspot.com/"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Chotto Matte...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Baka! This is not a NSFW enabled group!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': 'a52605e4317b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
