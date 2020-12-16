const Sequelize = require("sequelize")
const db = require("../database/db")
const multer = require("multer")
const express = require("express")
const app = express();
const path = require('path');
const crypto = require('crypto');
app.use(express.static('http:/localhost:4000/public/img'));
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
    'users',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_pengguna:{
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
        Kota:{
            type: Sequelize.STRING
        },
        Roles:{
            type: Sequelize.STRING
        },
        Foto:{
            type: Sequelize.STRING,
          get(){
              const image = this.getDataValue('Foto');
              return uploadDir+image;
          }
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