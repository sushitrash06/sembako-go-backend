const express = require("express")
const pesan = express.Router()
const jwt_decode = require("jwt-decode")
//const cors = require('cors')
//const jwt = require("jsonwebtoken")
const pesanan = require('../models/pesanan')
pesanan.sync().then(()=>{
    console.log("Pesanan berhasil sync dengan model");
}).catch(err =>{
    console.log("Gagal melakukan sync dengan model pesana",err);
});

//pesanan.use(cors())

pesan.post('/pesanan',(req,res)=>{

    const today = new Date()
    console.log(req.body)
    const decoded = jwt_decode(token);
    const pesananData={
        id_pesanan: req.body.id_pesanan,
        id_penjual: req.body.id_penjual,
        Tgl_order: today,
        id_user: decoded.id_user,
        Nama_pembeli:req.body.Nama_pembeli,
        Nama_toko: req.body.Nama_toko,
        Total_bayar: req.body.Total_bayar,
        Quantity: req.body,Quantity,
        Alamat_kirim: req.body.Alamat_kirim,
        Catatan: req.body.Catatan,
        Status: req.body.Status
    }
    .then(pesanan=>{
        if(!pesanan){
            pesanan.create(pesananData)
            .then(pesanan =>{
                res.json({
                    status: pesanan.id_pesanan + ' Data pesanan masuk'
                })
            })
            .catch(err =>{
                res.send('error: '+err)
            })
        }else{
            res.json({error:"Pesanan Double"})
        }
    })
    .catch(err=>{
        res.send('error: '+ err)
    })
    console.log(req.body)
})
module.exports = pesan
