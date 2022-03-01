const express = require('express')
const { urlencoded } = require('express')
const server=require('express')
const shoping_cart=server()
const path=require('path')

shoping_cart.use(server.json())
shoping_cart.use(server.urlencoded({extended:true}))
const port=5500

shoping_cart.use('/' ,server.static(path.join(__dirname,'public')))
shoping_cart.use('/api' ,require('./routes/api').routes)

shoping_cart.listen(port,()=>{
    console.log('shoping-cart started')
})