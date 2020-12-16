const Sequelize =require("sequelize")
const db = {}
const sequelize = new Sequelize("skripsi-sembako-go", "root","", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
 
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize =  sequelize
db.Sequelize = Sequelize

module.exports = db

module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b40be80ef15321",
    PASSWORD: "aaba3e84",
    DB: "heroku_2b27648f02401e5?reconnect=true'"
  };