const express=require("express")
const product = express.Router()
// const multer = require("multer");
const uploadfile = require('../upload')
const produk = require('../models/produk')
const {validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter'); //sanitize form params
const { Op } = require("sequelize");

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
        Username:req.body.Username,
        Nama_Produk:req.body.Nama_Produk,
        image: req.file === undefined ? "": req.file.filename,
        Deskripsi:req.body.Deskripsi,
        Price:req.body.Price, 
        Jumlah_stock:req.body.Jumlah_stock,
        StatusBarang:req.body.StatusBarang
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
product.delete('/:id_produk',(req,res)=>{
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
product.put('/editproduk/:id_produk',[
    uploadfile.single('image')
    ],(req,res)=>{ 
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.mapped()})
        }
    const produkData = {     
        id_user:req.body.id_user,
        Nama_toko:req.body.Nama_toko,
        Username:req.body.Username,
        Nama_Produk:req.body.Nama_Produk,
        image: req.file === undefined ? "": req.file.filename,
        Deskripsi:req.body.Deskripsi,
        Price:req.body.Price, 
        Jumlah_stock:req.body.Jumlah_stock,
        StatusBarang:req.body.StatusBarang
    }
    if(!produkData){
        res.status(400)
        res.json({
            error:'Bad Data'
        })
    }else{
        produk.update(
            (produkData),
            {
                where: {id_produk:req.params.id_produk} 
        }).then(()=>{
            res.json({status:'Produk Updated'})
            console.log(req.params.id_produk)
        }) 
        .catch(err=>{
            res.send('error: '+ err)
        })
    }
    console.log(produkData)
})
product.put('/laporkan/:id_produk',[
    uploadfile.single('image')
    ],(req,res)=>{ 
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.mapped()})
        }
    const produkData = {     
        id_user:req.body.id_user,
        Nama_toko:req.body.Nama_toko,
        Username:req.body.Username,
        Nama_Produk:req.body.Nama_Produk,        
        Deskripsi:req.body.Deskripsi,
        Price:req.body.Price, 
        Jumlah_stock:req.body.Jumlah_stock,
        StatusBarang:req.body.StatusBarang
    }
    if(!produkData){
        res.status(400)
        res.json({
            error:'Bad Data'
        })
    }else{
        produk.update(
            (produkData),
            {
                where: {id_produk:req.params.id_produk} 
        }).then(()=>{
            res.json({status:'Produk Updated'})
            console.log(req.params.id_produk)
        }) 
        .catch(err=>{
            res.send('error: '+ err)
        })
    }
    console.log(produkData)
})
product.get('/Username/:Username',(req,res)=>{
    produk.findAll({
        where:{
            Username: req.params.Username
        }
    }).then(produk =>{
        if(produk){
            res.json(produk)
        }else{
            res.send('Produk belum di masukan')
        }
    })  
}) 
product.get('/View/:id_user',(req,res)=>{
    produk.findAll({
        where:{
            id_user: req.params.id_user
        }
    }).then(produk =>{
        if(produk){
            res.json(produk)
        }else{
            res.send('Produk belum di masukan')
        }
    })  
})
product.get('/cari/:Nama_Produk',(req,res)=>{ 
    produk.findAll({ 
        where:{
            Nama_Produk: {
                [Op.like]: `%${req.params.Nama_Produk}%`,
            },
        }
    }).then(produk =>{
        if(produk){
            res.json(produk)
        }else{
            res.send('Produk belum di masukan')
        }
    }) 
})
product.get('/selectproduct/:id_produk',(req,res)=>{
    produk.findOne({
        where:{
            id_produk:req.params.id_produk
        }
    }).then(produk=>{
        if(produk){
            res.json(produk)
        }else{
            res.send('Tidak ada produk ')
        }
    })
})
product.get('/cari/blokir/:StatusBarang',(req,res)=>{ 
    produk.findAll({
        where:{
            StatusBarang: {
                [Op.like]: `%${req.params.StatusBarang}%`,
            },
        }
    }).then(produk =>{
        if(produk){
            res.json(produk)
        }else{
            res.send('Produk belum di masukan')
        }
    }) 
})
product.get('/banned/',(req,res)=>{ 
    produk.findAll({
        where:{ [Op.or]:[
            { 
               Nama_Produk: {
                  [Op.like]: '%Baju%'
               }
            },
        { 
            Nama_Produk:{
                [Op.like]: '%Celana%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Lemari%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Meja%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Mainan%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Bekas%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Headphone%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%HP%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%TV%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Kerudung%'
            }
        },
        { 
            Nama_Produk:{
                [Op.like]: '%Rok%'
            }
        },
    ]}
    }).then(produk =>{
        if(produk){
            res.json(produk)
        }else{
            res.send('Produk belum di masukan')
        }
    })
    .catch(err=>{
        res.send('error: '+ err)
    })
})
module.exports=product;