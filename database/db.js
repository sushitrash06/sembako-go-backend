const Sequelize =require("sequelize")
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    databse: "skripsi-sembako-go"
});
connection.connect(err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Connect to db');
});
function executeAsync(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql ,(err , result) => {
            if(err){
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

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

module.exports = db , executeAsync