const express = require("express")
const {connection }= require("./db")
require("dotenv").config()
const app = express()

app.use(express.json())

app.use('/',(req, res)=>{
    console.log("Hello world")
    res.send('Hello macbook')
})

app.listen(process.env.PORT, async()=>{
try{
 await connection
console.log(`DB is connected`)
}catch(err){
console.log(err)
console.log('DB is not connect')
}
console.log(`server is connect on port ${process.env.PORT}`)
})