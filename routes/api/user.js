const routes=require('express').Router()
user=require('../../db').user
routes.get('/',(req,res)=>{
    user.findAll( )
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch((err)=>{
        res.status(500).send({
            error:'could not retrieve users'
        }
        )
    })
})

routes.post('/',(req,res)=>{
    user.create({
        name:req.body.name
    }).then((users)=>{
        res.status(201).send(users)
    }).catch((err)=>{
        res.status(501).send({
            error:'could not add user'

        })
    })
})

exports=module.exports=routes