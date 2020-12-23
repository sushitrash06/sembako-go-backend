const Sequelize = require("sequelize")
const db = require("../database/db")
//const {uploadDir} = require("../upload")
const multer = require("multer");
const express = require("express")
const app = express();
const path = require('path');
const crypto = require('crypto');
app.use(express.static('http:/140.238.205.80/public/img'));


const uploadDir = '/img/';

const storage = multer.diskStorage({
    destination:"./public"+uploadDir,
    filename: function (req,file,cb){
        crypto.pseudoRandomBytes(16, function(err,raw){
            if (err) return cb (err)

            cb(null, raw.toString('hex')+path.extname(file.originalname))
        })
    }
})
const uploadfile = multer({storage: storage, dest:uploadDir})
module.exports= uploadfile;
module.exports = db.sequelize.define(
    'produks',
    {
        id_produk:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: Sequelize.INTEGER  
        },
        Username:{
            type: Sequelize.STRING
        },
        Nama_toko:{
            type: Sequelize.STRING
        },
        Nama_Produk:{
            type: Sequelize.INTEGER
        },
        image:{
            type: Sequelize.STRING,
          get(){
              const image = this.getDataValue('image');
              return uploadDir+image;
          }
        },
        Deskripsi:{
            type: Sequelize.STRING
        },
        Price:{
            type: Sequelize.INTEGER
        }, 
        Jumlah_stock:{
            type:Sequelize.INTEGER
        },
        StatusBarang:{
            type:Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }

)