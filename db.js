const sequelize=require('sequelize')
const db=new sequelize('shopingdb','shopper','shoppassword',
{   host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
}

)
const user=db.define(
    'users',{
        id:{
            type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
        },
    name :{
        type:sequelize.STRING,
        allowNull:false

    }
    
}
);
const product=db.define('products',
{
   id:{
       type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
   } ,
   name:{
       type:sequelize.STRING,
       allowNull:false
   },
   manufacturer:sequelize.STRING,
   price:{
       type:sequelize.FLOAT,
       allowNull:false,
       defaultValue:0.0
   }
})
db.sync()
.then(()=>console.log('synced'))
.catch((err)=>console.log(err))


exports=module.exports={
    user,product
}
