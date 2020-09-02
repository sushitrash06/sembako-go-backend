const express=require("express")
const product = express.Router()
const jwt_decode=require("jwt-decode")

const produk = require('../models/produk')

produk.sync().then(()=>{
    console.log("produk berhasil sync")
}).catch(err=>{
    console.log("produk gagal sync",err)
})

product.post('/produk',(req,res)=>{
    const decoded = jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo0MCwiTmFtYV90b2tvIjoiVGVzdCIsIlVzZXJuYW1lIjoiVGVzdEB0ZXN0LmNvbSIsIlJvbGVzIjoiUGVuanVhbCIsImlhdCI6MTU5OTA2NDk2MywiZXhwIjoxNTk5MDY2NDAzfQ.kkNDO_6U72lbFvTl8Bt-S_oopGKvK86_q0yRCE8ye3c');

    const productData={
        id_produk:req.body.id_produk,
        id_user:decoded.id_user,
        Nama_toko:req.body.Nama_toko,
        Nama_Produk:req.body.Nama_Produk,
        image: req.body.Nama_Produk,
        Deskripsi:req.body.Deskripsi,
        Price:req.body.Price,
        Jumlah_stock:req.body.Jumlah_stock
    }
    produk.findOne({
        where:{
            id_produk: req.body.id_produk
        }
    })
    .then(produk=>{
        if(!produk){
            produk.create(productData)
            .then(produk=>{
                res.json({
                    status: produk.id_produk+'pesanan masuk'
                })
            })
            .catch(err =>{
                res.send('error: '+err)
            })
        }else{
            res.json({error:"Produk double"})
        }
    })
    .catch(err=>{
        res.send('error: '+err)
    })
    console.log(req.body)
})
module.exports=product