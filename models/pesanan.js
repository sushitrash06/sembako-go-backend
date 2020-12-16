const Sequelize = require("sequelize")
const db = require("../database/db")
module.exports = db.sequelize.define(
    'pesanans',
    {
        id_pesanan: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tgl_order:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW 
        },
        Nama_pengguna: {
            type: Sequelize.STRING,
        },
        id_user:{
            type: Sequelize.INTEGER,
        },
        Username:{
            type: Sequelize.STRING,
        },
        pesanan:{
            type: Sequelize.STRING
        },
        Nama_toko:{
            type: Sequelize.STRING
        },
        Price:{
            type: Sequelize.STRING
        },
        Total_bayar:{
            type: Sequelize.INTEGER 
        },
        jumlah_pesanan:{
            type: Sequelize.INTEGER
        },
        Alamat_kirim:{
            type: Sequelize.STRING
        },
        Nomer_hp:{
            type: Sequelize.INTEGER
        },
        Catatan:{
            type: Sequelize.STRING
        },
        Status:{
            type:Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)