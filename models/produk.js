const Sequelize = require("sequelize")
const db = require("../database/db")
module.exports = db.sequelize.define(
    'pesanan',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_toko:{
            type: Sequelize.STRING
        },
        Nama_produk:{
            type: Sequelize.INTEGER
        },
        image:{
            type: Sequelize.STRING
        },
        Deskripsi:{
            type: Sequelize.STRING
        },
        Price:{
            type: Sequelize.INTEGER
        }

    },
    {
        timestamps: false
    }
)