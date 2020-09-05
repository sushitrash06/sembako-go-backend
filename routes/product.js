const express=require("express")
const product = express.Router()
//const jwt_decode=require("jwt-decode")
const produk = require('../models/produk')
produk.sync().then(()=>{
    console.log("produk berhasil sync")
}).catch(err=>{
    console.log("produk gagal sync",err)
})

product.post('/addproduk',(req,res)=>{
//    const decoded = jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo0MCwiTmFtYV90b2tvIjoiVGVzdCIsIlVzZXJuYW1lIjoiVGVzdEB0ZXN0LmNvbSIsIlJvbGVzIjoiUGVuanVhbCIsImlhdCI6MTU5OTA2NDk2MywiZXhwIjoxNTk5MDY2NDAzfQ.kkNDO_6U72lbFvTl8Bt-S_oopGKvK86_q0yRCE8ye3c');
    console.log(req.body)
    const produkData = {    
        id_user:req.body.id_user,
        Nama_toko:req.body.Nama_toko,
        Nama_Produk:req.body.Nama_Produk,
        image: req.body.Nama_Produk,
        Deskripsi:req.body.Deskripsi,
        Price:req.body.Price,
        Jumlah_stock:req.body.Jumlah_stock
    }
    produk.findOne({
        where:{
            id_user:req.body.id_user,
        }
    })
    if(!produkData){
        res.status(400)
        res.json({
            error: 'Bad data'
        })
    }else{
        produk.create(req.body)
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

module.exports=product