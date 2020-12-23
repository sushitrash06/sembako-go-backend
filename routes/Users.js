const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const uploadfile = require('../upload')
const {validationResult } = require('express-validator/check');
const User = require('../models/User')
const { matchedData, sanitize } = require('express-validator/filter'); //sanitize form params
const { Op } = require("sequelize");


User.sync().then(() => {
    console.log('Berhasil melakukan sync dengan model User.');
}).catch(err => {
    console.log('Gagal melakukan sync dengan model User', err);
});


users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',[
    uploadfile.single('Foto')
    ],(req,res)=>{
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.mapped()})
        }
    const today = new Date()
    const userData = {
        Nama_pengguna: req.body.Nama_pengguna,
        Nama_toko: req.body.Nama_toko,
        Username: req.body.Username,
        Password: req.body.Password,
        Alamat: req.body.Alamat,
        Kota:req.body.Kota,
        Roles: req.body.Roles,
        Foto: req.file === undefined ? "": req.file.filename,
        create:today
    }
    console.log(userData)
    User.findOne({
        where: {
          Username: req.body.Username
        }
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.Password,10,(err,hash)=>{
                userData.Password= hash
                User.create(userData)
                .then(user =>{
                    res.json({
                        status: user.Username + ' registered',
                        token: jwt.sign({
                            Nama_pengguna:user.Nama_pengguna,
                            Alamat:user.Alamat,
                            Kota:user.Kota,
                            Foto:user.Foto,
                            id_user: user.id_user,
                            Nama_toko: user.Nama_toko,
                            Username: user.Username,
                            Roles: user.Roles
                        }, process.env.SECRET_KEY)
                    });
                })
                .catch(err =>{
                    res.send('error: '+err)
                })
            })
        }else{
            res.status(402).json({error: "User Alredy Exits"})
        }
    }) 
    .catch(err =>{
        res.send('error: ' + err)
        res.status(402).json({error:"EROR!"})
    })
    console.log(req.body)
})
users.post('/login',(req,res)=>{
    User.findOne({
        where: {
            Username: req.body.Username,
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.Password, user.Password)){
                let token = jwt.sign({
                    // Masukkan data apapun ke sini untu k disimpan ke token, tapi jangan simpan data yang sifatnya rahasia.
                    Nama_pengguna:user.Nama_pengguna,
                    Alamat:user.Alamat,
                    Kota:user.Kota,
                    Foto:user.Foto,
                    id_user: user.id_user,
                    Nama_toko: user.Nama_toko,
                    Username: user.Username,
                    Roles: user.Roles
                }, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token)
    }else{
        res.status(401).json({error: "incorrect Password"})
    }
    }else{
            res.status(400).json({error: "User doesnt not exist"})
        }
    })
    .catch(err =>{
        console.error(err);
        res.status(400).json({error: "Error salah"})
    })
}) 
users.put('/editprofile/:id_user',[
    uploadfile.single('Foto')
    ],(req,res)=>{
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.mapped()})
        }   
    const today = new Date()
    console.log(req.body)
    const userData = {
        id_user:req.params.id_user,
        Nama_pengguna: req.body.Nama_pengguna,
        Nama_toko: req.body.Nama_toko,
        Username: req.body.Username,
        Password: req.body.Password,
        Alamat: req.body.Alamat,
        Kota:req.body.Kota,
        Roles: req.body.Roles,
        Foto: req.file === undefined ? "": req.file.filename,
        create:today
    }
    User.findOne({
        where: { Username: req.body.Username,}
    })
    .then(user=>{
        if(user){
            bcrypt.hash(req.body.Password,10,(err,hash)=>{
                userData.Password= hash
                User.update((userData),{
                    where: {
                        id_user:req.params.id_user
                    }
                }).then(user =>{
                    res.json({
                        status: user.Username + 'Updated',
                        token: jwt.sign({ 
                            Nama_pengguna:user.Nama_pengguna,
                            Alamat:user.Alamat,
                            Kota:user.Kota,
                            Foto:user.Foto,
                            id_user: user.id_user,
                            Nama_toko: user.Nama_toko,
                            Username: user.Username, 
                            roles: user.roles
                            },process.env.SECRET_KEY) 
                    });      
                })              
            .catch(err =>{
                res.send('error: '+err)
            })
        })
        }else{
            res.status(402).json({error: "User Alredy Exits"})
        }
    })
    .catch(err =>{
        res.status(402).json({err:"EROR!" + err})
    })
    console.log(req.body)
})
users.get('/findUser/User/:Username',(req,res)=>{
    User.findAll({
        where:{
            Username:{
                [Op.like]:`%${req.params.Username}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/findUser/Kota/:Kota',(req,res)=>{
    User.findAll({
        where:{
            Kota:{
                [Op.like]:`%${req.params.Kota}%`,
            },
            Roles:{
                [Op.like]:'%Penjual'
            }
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/User/:Username',(req,res)=>{
    User.findOne({
        where:{
            Roles:{
                [Op.like]:`%${req.params.Username}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/Jumlah/:Roles',(req,res)=>{
    User.findAndCountAll({
        where:{
            Roles:{
                [Op.like]:`%${req.params.Roles}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/Total/',(req,res)=>{
    User.findAndCountAll()
    .then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/',(req,res)=>{
    User.findAll()
    .then(users=>{
    res.json(users)
})
    .catch(err=>{
        res.send('error : '+err)
    })
})
users.get('/Recomendation/Kota/:Kota',(req,res)=>{
    User.findAll({
        limit: 5,
        where:{
            Kota:{
                [Op.like]:`%${req.params.Kota}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/Penjual/User/:Username',(req,res)=>{
    User.findOne({
        where:{
            Username:{
                [Op.like]:`%${req.params.Username}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/finduser/Toko/:Nama_toko',(req,res)=>{
    User.findAll({
        where:{
            Nama_toko:{
                [Op.like]:`%${req.params.Nama_toko}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})
users.get('/Admin/User/:Roles',(req,res)=>{
    User.findAll({
        where:{
            Roles:{
                [Op.like]:`%${req.params.Roles}%`,
            },
        }
    }).then(User=>{
        if(User){
            res.json(User)
        }else{
            res.send('User Tidak di temukan')
        }
    })
})

module.exports =  users