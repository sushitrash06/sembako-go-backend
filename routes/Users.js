const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res)=>{
    const today = new Date()
    console.log(req.body)
    const userData = {
        Nama: req.body.Nama,
        Nama_toko: req.body.Nama_toko,
        Username: req.body.Username,
        Password: req.body.Password,
        Alamat: req.body.Alamat,
        Roles: req.body.Roles,
        create:today
    }
    User.findOne({
        where:{
            Username: req.body.Username
        }
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.Password,10,(err,hash)=>{
                userData.Password= hash
                User.create(userData)
                .then(user =>{
                    res.json({status: user.Username + 'registered'})
                })
                .catch(err =>{
                    res.send('error: '+err)
                })
            })
        }else{
            res.json({error: "User Alredy Exits"})
        }

    }) 
    .catch(err =>{
        res.send('error: ' + err)
    })
    console.log(req.body)
})
users.post('/login',(req,res)=>{
    User.findOne({
        where: {
            Username: req.body.Username
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.Password, user.Password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
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
        res.status(400).json({error: "Error salah"})
    })
})
module.exports =  users