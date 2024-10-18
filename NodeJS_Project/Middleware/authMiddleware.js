const jwt = require('jsonwebtoken')

const auth = (req, res, next) =>{
   const token = req.headers.authorization 
   console.log(token)
   if(token){
    try{
   const decoded = jwt.verify(token.split(" ")[1], "storeData")
   if(decoded){
    req.body.authorId=decoded.authorId,
    req.body.author = decoded.author,
    next();
   }else{
    res.status(401).send({ msg: "please Login !!" });
   }
    } catch(err){
        res.status(401).send({err:err.message})
    }
   }else{
    res.status(401).send({ msg: "No token provided. Please log in!" });
   }
}

module.exports={
    auth
}