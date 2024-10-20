const express = require("express")

const {UserModel} = require("../model/userModel")
const userRoutes = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//register

userRoutes.post('/register', async(req, res)=>{
    const {name, gender, email, password , isAdmin} = req.body   
    console.log(email)
    console.log(gender)
    console.log(password)
    console.log(name)
    console.log(isAdmin)

    try{
        bcrypt.hash(password, 5, async(err, hash)=>{
            const user = new UserModel({name, gender, email, password: hash , isAdmin})
            await user.save();
            res.status(200).send({massege:"New User Ragistered" , isAdmin:isAdmin})
            })
 
    }catch(error){
        res.status(400).send({err: err.massege})
    }
})

//login
userRoutes.post('/login', async(req, res)=>{
 const {email, password} = req.body

 try{
    const user = await UserModel.findOne({email})
    console.log(user, "userData") 
   
   if(user){
    bcrypt.compare(password, user.password,(err, result)=>{   
   if(result){
   const token = jwt.sign({authorId: user._id, author: user.name},"storeData")
   console.log(token, "token")
   res.status(200).send({msg:"User login Successfully",token:token , isAdmin:user.isAdmin} )
   }else{
       res.status(400).send({msg:"User Not Login"})
   }
   })
   }else{
       res.status(400).send({msg:"User does not exist"})
   }
 }catch(err){
    res.status(400).send({err:err.massege})
 }
})

module.exports={
    userRoutes
}