const routes=require('express').Router()
routes.use('/user',require('./user'))
routes.use('/products',require('./product'))
exports=module.exports={
                        routes
                    }
//console.log(exports.routes)