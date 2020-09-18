const express=require("express")
const product = express.Router()
// const multer = require("multer");
const uploadfile = require('../upload')
const produk = require('../models/produk')
const {validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter'); //sanitize form params
produk.sync().then(()=>{
    console.log("produk berhasil sync")
}).catch(err=>{
    console.log("produk gagal sync",err)
})
product.post('/addproduk/',[
    uploadfile.single('image')
    ],(req,res)=>{ 
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.mapped()})
        }
    const produkData = {    
        id_user:req.body.id_user,
        Nama_toko:req.body.Nama_toko,
        Nama_Produk:req.body.Nama_Produk,
        image: req.file === undefined ? "": req.file.filename,
        Deskripsi:req.body.Deskripsi,
        Price:req.body.Price,
        Jumlah_stock:req.body.Jumlah_stock
    }
    console.log(produkData)
    if(!produkData){ 
        res.status(400)
        res.json({
            error: 'Bad data'
        })
    }else{
        produk.create(produkData)
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.json('error: '+err)
            })
        }
})
product.delete('/addproduk/:id_produk',(req,res)=>{
    produk.destroy({
        where: {
            id_produk: req.params.id_produk
        }
    })
    .then(()=>{
        res.json({status: 'produk di hapus!'})
    })
    .catch(err=>{
        res.send('error: '+err)
    })
})
product.get('/',(req,res)=>{
    produk.findAll()
    .then(product=>{
    res.json(product)
})
    .catch(err=>{
        res.send('error : '+err)
    })
})
product.put('/editproduk',(req,res)=>{
    if(!produkData){
        res.status(400)
        res.json({
            error:'Bad Data'
        })
    }else{
        produk.update(
            {produkData},
            {where:{id_produk:req.params.id_produk}}
        )
        .then(()=>{
            res.json({status:'Product updated'})
        })
        .error(err=> handleError(err))
    }
})
module.exports=product;