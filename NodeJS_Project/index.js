const express = require("express")
const {connection }= require("./db")
const {userRoutes} = require("./routes/userRoutes")
const {storeRoutes} = require("./routes/storeRoutes")
require("dotenv").config()
const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
    console.log("Hello world")
    res.send('Hello macbook')
})

app.use("/users", userRoutes)
app.use("/stores", storeRoutes)



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




