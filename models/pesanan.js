const Sequelize = require("sequelize")
const db = require("../database/db")
module.exports = db.sequelize.define(
    'pesanan',
    {
        id_pesanan: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tgl_order:{
            type: Sequelize.DATE,
            defaultValue: sequelize.NOW 
        },
        id_user:{
            type: Sequelize.INTEGER
        },
        Nama_toko:{
            type: Sequelize.STRING
        },
        Total_bayar:{
            type: Sequelize.INTEGER
        },
        Quantity:{
            type: Sequelize.INTEGER
        },
        Alamat_kirim:{
            type: Sequelize.STRING
        },
        Catatan:{
            type: Sequelize.STRING
        }

    },
    {
        timestamps: false
    }
)