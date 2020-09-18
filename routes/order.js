const express = require("express")
const pesan = express.Router()
//const jwt_decode = require("jwt-decode")
//const cors = require('cors')
//const jwt = require("jsonwebtoken")
const pesanan = require('../models/pesanan')
pesanan.sync().then(()=>{
    console.log("Pesanan berhasil sync dengan model");
}).catch(err =>{
    console.log("Gagal melakukan sync dengan model pesana",err);
});

//pesanan.use(cors())

pesan.post('/tambah_pesanan',(req,res)=>{

    const today = new Date()
    console.log(req.body)
    const pesananData={
        id_user: req.body.id_user,
        pesanan: req.body.pesanan,
        Nama_pembeli:req.body.Nama_pembeli,
        Nama_toko: req.body.Nama_toko,
        Total_bayar: req.body.Total_bayar,
        jumlah_pesanan: req.body.jumlah_pesanan,
        Alamat_kirim: req.body.Alamat_kirim,
        Nomer_hp: req.body.Nomer_hp,
        Catatan: req.body.Catatan,
        Status: req.body.Status,
        Tgl_order: today,
    }
    console.log(req.body.jumlah_pesanan)
    console.log(pesananData) 
        if(!pesanan){
            res.status(400)
            res.json({
                error: 'Bad Data'
            })
        }else{
            pesanan.create(pesananData)
            .then(data =>{
                res.send(data)
            }).catch(err=>{
                res.send('error: '+ err)
            })
        }
})
pesan.get('/',(req,res)=>{
    pesanan.findAll()
    .then(pesan=>{
    res.json(pesan)
})
.catch(err=>{
    res.send('error: '+err)
    })
})



module.exports = pesan
