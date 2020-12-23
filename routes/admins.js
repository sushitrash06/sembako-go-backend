const express = require("express")
const admins = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Admin = require ('../models/Admin')
Admin.sync().then(()=>{
    console.log('Berhasil melakukan sync dengan model Admin')
}).catch(err=>{
    console.log('gagal ngadmin'+ err)
})
 
admins.use(cors())

process.env.SECRET_KEY='secret'

admins.post('/register',(req,res)=>{
    const adminData ={
        Username: req.body.Username,
        Password: req.body.Password
    }
    console.log(adminData)
    Admin.findOne({
        where:{
            Username: req.body.Username
        }
    })
    .then(admin=>{
        if(!admin){
            bcrypt.hash(req.body.Password,10,(err,hash)=>{
                adminData.Password= hash
                Admin.create(adminData)
                .then(admin =>{
                    res.json({
                        status: admin.Username + 'registered',
                        token: jwt.sign({
                            Username: admin.Username,
                        }, process.env.SECRET_KEY)
                    });
                })
                .catch(err =>{
                    res.send('error: eror register '+err)
                    console.log(err)
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
admins.post('/login',(req,res)=>{
    Admin.findOne({
        where: {
            Username: req.body.Username,
        }
    })
    .then(admin => {
        if(admin){
            if(bcrypt.compareSync(req.body.Password, admin.Password)){
                let token = jwt.sign({ 
                    Username: admin.Username,
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
module.exports = admins    