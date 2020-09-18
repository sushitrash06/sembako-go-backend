const multer = require("multer");
const express = require("express")
const app = express();
const path = require('path');
const crypto = require('crypto');
app.use(express.static('public'));


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