const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports=db.sequelize.define(
    'keranjangs',
    {
        id_keranjang:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_produk: {
            type: Sequelize.INTEGER,
        },
        id_user:{
            type: Sequelize.INTEGER,
        },
        Nama_Produk:{
            type: Sequelize.STRING,
        },
        Price:{
            type:Sequelize.INTEGER,
        },
        Username:{
            type: Sequelize.STRING,
        },
        Nama_toko:{
            type: Sequelize.STRING,            
        },
        Deskripsi:{
            type: Sequelize.STRING,
        },
        status_keranjang:{
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: false
    }
)