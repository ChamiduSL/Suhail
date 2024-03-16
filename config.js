const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "923184474176" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SESSION_19_24_03_15_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dvMktVR1lGTDgwdFNUM08rbWIyYm12eFUvQm9RRi8zM3JhYkhydEpGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmExNkcvS1RZSW1IM0dyUWpsTHoyVGsxMDFSM1BUc0pteHlad2ZHY1dEdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRmtaNlQrekQ3bExrc3ZyN3U4N0xwWmZ3T1ZZQVYvRUtFdVNFWjVHeUVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvbUlKZUIvZGJrUHpLR3Rtb2NtN2ROT3JTQmltMEQ2c2VwWExjeTNhSVc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKN0VsdWYwUlA3TWJ1S1JLL1RNdWpUNTdpcmRzcU05d0FOTHN5QzErblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAxUnhJemowM0NTNm5jRmkyVytvaGRDS05tUis5bHdyb0l2TWRFNzlja1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0x1ZWNkNnhoMzNRODgzVWpPL2U3Y013MC84M0hkWmhrakM2dlNNcklWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmdrYVhuZlhoUjI5UTlMRXVsM2ZIcWczTDVZTmhEOU9tdGlEcUVsUXQwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zYmYzdVZXbFBaR2FIK0dyN1V0UmlMSWgvWEtlT3IzOElXRWg1ak1qVWRldE85ZURkc21YSjRibG83OFVFbGdab2hNWVFIRE5wZU1HRXIwT3lnUWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJOR0U4V3pwSmZFK0RGNkVybHBkYStrTjRMNmJrZDFDMk02QWZ6TzlSWE04PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmNEtPa1Q0RlFjYXRyTXJTZS1UY3BnIiwicGhvbmVJZCI6ImY3NWFhZDRiLWUxMjctNGVhOS04ODdhLWZlZGU2YzY0Y2E0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVWFpOVDRCd2VHMjBReFpmMmExaVRoTkRWUHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXJkQ0ZERkVXYmdoUy82RGorUUVNVDBXRGQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlAzWTdDUUdKIiwibWUiOnsiaWQiOiI5NDc4MTk5NzM0ODoyOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZi+8J2ZnfCdmqvwnZmR8J2asC4g8J2Yv/CdmaoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t6TjJPOEdFT2pBMHE4R0dCb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJXYlljeU1sUWJVWFBBN2hFZGZFTkhsZ2xsemJvVUc4QzVjVW5jcFBLVFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhqQnVGZGhZNjhha0xoeGxlZHJCTGUzTHh0bFlZSVZmVzZYZjMvVnNWUlBPdlNERGYzMWFDcU9WQXVtUjJaMmEzUUpTZTZmWHVkSzE4R1hQNnNpeEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZUWM3YVVnSCtKVU81R0V5WUZZQzIrOFhkNlRRVDluNVdMT05pTTdUMCtVWGNhTWk2bGI4U0xFNFEyeEN2SmFOT2hLemp0a0h3M002KzFYc3h1eDlnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgxOTk3MzQ4OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRsbTJITWpKVUcxRnp3TzRSSFh4RFI1WUpaYzI2RkJ2QXVYRkozS1R5azAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTA1MzA2NjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTRtIn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
