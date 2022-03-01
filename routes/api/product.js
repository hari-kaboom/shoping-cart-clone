const routes=require('express').Router()
const product_table=require('../../db').product
routes.get('/',(req,res)=>{
    product_table.findAll()
                .then((products)=>{
                    res.status(200).send(products)
                })
                .catch((err)=>{
                    error:'not able to retrieve products'
                })

})
routes.post('/',(req,res)=>{
    
    product_table.create(
        {
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            price:req.body.price
        }
    )
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        res.status(500).send({
            error:'not add products'
        })
    })
})






exports=module.exports=routes