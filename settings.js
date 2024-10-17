const fs = require('fs')
require('dotenv').config()

global.creator = process.env.CREATOR || 'AETHER'
global.MONGO_DB_URI = process.env.MONGO_DB_URI || process.env.MONGO_URL || "mongodb+srv://aetherz:Fahadd17@aetherz.ukjbb.mongodb.net/?retryWrites=true&w=majority&appName=AETHERz"
global.ACTIVATION_TOKEN_SECRET = process.env.ACTIVATION_TOKEN_SECRET
global.your_email = process.env.YOUR_EMAIL
global.email_password = process.env.EMAIL_PASSWORD
global.limitCount = parseInt(process.env.LIMIT_COUNT) || 10000
global.YUOR_PORT = parseInt(process.env.YOUR_PORT) || 8000

global.loghandler = {
    noapikey:{
        status: 403,
        message: 'Input parameter apikey',
        creator: `${global.creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavailable, Sedang dalam perbaikan',
        creator: `${global.creator}`
    },
    apikey: {
        status: 403,
        message: 'Forbidden, Invalid apikey',
        creator: `${global.creator}`
    },
    noturl: {
        status: 403,
        message: 'Forbidden, Invalid url, masukkan parameter url',
        creator: `${global.creator}`,
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update '${__filename}'`)
    delete require.cache[file]
    require(file)
})
