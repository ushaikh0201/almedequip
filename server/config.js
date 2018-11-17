var emailConfig = {
    "username": "",
    "password": ""
}

module.exports = {
    //connectionString: process.env.NODE_ENV === 'production' ? 'mongodb://apvpn:apvpn123#@ds133136.mlab.com:33136/almedequip' : 'mongodb://localhost:27017/test_mean_stack',
    //connectionString: process.env.NODE_ENV === 'production' ? 'mongodb://apvpn:apvpn123#@ds133136.mlab.com:33136/almedequip' : 'mongodb://192.168.10.217:27017/mean-stack',
    //connectionString:'mongodb://apvpn:apvpn123#@ds133136.mlab.com:33136/almedequip',
    connectionString: process.env.NODE_ENV === 'production' ? 'mongodb://apvpn:apvpn123#@ds133136.mlab.com:33136/almedequip' : 'mongodb://localhost:27017/almedequip',
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://almedequip.herokuapp.com' : 'http://127.0.0.1:3000',
    siteUrl: process.env.NODE_ENV === 'production' ? 'https://almedequip.herokuapp.com' : 'http://127.0.0.1:3000',
    applicationName: process.env.NODE_ENV === 'production' ? "Almed Equipments" : "Almed Equipments Dev",
    secret: process.env.NODE_ENV === 'production' ? "ushaikh0201" : "ushaikh0201",
    smtpDetails: process.env.NODE_ENV === 'production' ? emailConfig : emailConfig,
    projectPath: __dirname
}