const Sequelize = require("sequelize")
const db = require("../database/db")
module.exports = db.sequelize.define(
    'user',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama:{
            type: Sequelize.STRING 
        },
        Nama_toko:{
            type: Sequelize.STRING 
        },
        Username:{
            type: Sequelize.STRING 
        },
        Password:{
            type: Sequelize.STRING 
        },
        Alamat:{
            type: Sequelize.STRING
        },
        Roles:{
            type: Sequelize.STRING
        },
        created:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)