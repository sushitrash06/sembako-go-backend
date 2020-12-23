const express = require("express")
const pesan = express.Router()
const { Op } = require("sequelize");
const pesanan = require('../models/pesanan')
pesanan.sync().then(()=>{
    console.log("Pesanan berhasil sync dengan model");
}).catch(err =>{
    console.log("Gagal melakukan sync dengan model pesana",err);
});

pesan.post('/tambah_pesanan',(req,res)=>{

    const today = new Date()
    console.log(req.body)
    const pesananData={
        id_user: req.body.id_user,
        Username: req.body.Username,
        pesanan: req.body.pesanan,
        Nama_pengguna:req.body.Nama_pengguna,
        Nama_toko: req.body.Nama_toko,
        Price:req.body.Price,
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

pesan.get('/penjual/:Username',(req,res)=>{
    pesanan.findAll({
        where:{
            Username:req.params.Username,
        }
    }).then(pesanan=>{
        if(pesanan){
            res.json(pesanan)
        }else{
            res.send('tidak ada orderan')
        }
    })
})
pesan.get('/pembeli/:id_user',(req,res)=>{
    pesanan.findAll({
        where:{
            id_user:req.params.id_user,
        }
    }).then(pesanan=>{
        if(pesanan){
            res.json(pesanan)
        }else{
            res.send('tidak ada barang yang di order')
        }
    })
})
pesan.put('/editpesanan/:id_pesanan',(req,res)=>{
    const today = new Date()
    console.log(req.body)
    const pesananData={
        Status: req.body.Status,
        Tgl_order: today,
    }
    if(!pesananData){
        res.status(400)
        res.json({
            error:'Bad data'
        })
    }else{
        pesanan.update(
            (pesananData),
            {
                where: {
                    id_pesanan:req.params.id_pesanan
                }
        }).then(()=>{
            res.json({status:'Order updated'})
            console.log(req.params.id_pesanan)
        }).catch(err=>{
            res.send('error:'+err)
        })
    }
    console.log(pesananData)
})
pesan.get('/pembeli/:id_user/status/:Status',(req,res)=>{
    pesanan.findAll({
        where:{
            [Op.and]:[
            {id_user:req.params.id_user},
            {Status:req.params.Status}
            ]
        }
    }).then(pesanan=>{
        if(pesanan){
            res.json(pesanan)
        }else{
            res.send('tidak ada orderan')
        }
    })
})
pesan.get('/penjual/:Username/status/:Status',(req,res)=>{
    pesanan.findAll({ 
        where:{
            [Op.and]:[
            {Username:req.params.Username},
            {Status:req.params.Status}
            ]
        }
    }).then(pesanan=>{
        if(pesanan){
            res.json(pesanan)
        }else{
            res.send('tidak ada orderan')
        }
    })
})
module.exports = pesan
