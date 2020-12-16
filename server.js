var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));
var Users = require('./routes/Users')
app.use('/users', Users)
var pesan =require('./routes/order')
app.use('/pesanan',pesan)
var produk =require('./routes/product')
app.use('/product',produk)
var cart = require('./routes/cart')
app.use('/keranjang',cart)
var admin = require('./routes/admins')
app.use('/admin',admin)
app.listen(port,()=>{
    console.log("Server is running at : " + port)
})
