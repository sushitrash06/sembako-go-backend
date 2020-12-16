const express = require("express")
const keranjang = express.Router()
const cart = require('../models/keranjang')
const { Op } = require("sequelize");

cart.sync().then(()=>{
    console.log("Keranjang berbasil async dengan model")
}).catch(err=>{
    console.log("Gagal melakukan async dengan model keranjang",err);
})

keranjang.post('/addtocart',(req,res)=>{
    console.log(req.body)
    const KeranjangData={
        id_produk:req.body.id_produk,
        id_user:req.body.id_user,
        Nama_Produk:req.body.Nama_Produk,
        Price:req.body.Price,
        Username:req.body.Username,
        Nama_toko:req.body.Nama_toko,
        Deskripsi:req.body.Deskripsi,
        status_keranjang:req.body.status_keranjang,
    }
    console.log(KeranjangData)
    if(!cart){
        res.status(400)
        res.json({
            error: 'Bad Data'
        })
    }else{
        cart.create(KeranjangData)
        .then(data=>{
            res.send(data) 
        }).catch(err=>{
            res. send('error: '+err)
        })
    }
})
keranjang.get('/user/:id_user/status/:status_keranjang',(req,res)=>{
    cart.findAll({
        where:{
            [Op.and]:[
            {id_user:req.params.id_user},
            {status_keranjang:req.params.status_keranjang}
            ]
        }
    }).then(cart=>{
        if(cart){
            res.json(cart)
        }else{
            res.send('Keranjang kosong')
        }
    })
})
keranjang.get('/view/:id_keranjang',(req,res)=>{
    cart.findOne({
        where:{
            id_keranjang:req.params.id_keranjang
 
        }
    }).then(cart=>{
        if(cart){
            res.json(cart)
        }else{
            res.send('Keranjang kosong')
        }
    })
})
keranjang.delete('/delete/:id_keranjang',(req,res)=>{
    cart.destroy({
        where:{
            id_keranjang:req.params.id_keranjang
        }
    }).then(()=>{
        res.json({status:'keranjang di hapus'}) 
    })
    .catch(err=>{
        res.send('error:'+err)
    })
})  
module.exports= keranjang