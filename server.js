var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

var Users = require('./routes/Users')
app.use('/Users', Users)
var pesan =require('./routes/order')
app.use('/pesanan',pesan)
app.listen(port,()=>{
    console.log("Server is running at : " + port)
})