const express = require("express")
const {StoreModel} = require("../model/storeModel")
const storeRoutes = express.Router()

// post
storeRoutes.post('/create', async(req, res)=>{

    try{
   const storedata = new StoreModel(req.body)
   storedata.save()
   res.status(200).send("Added items in store")
    }catch(err){
res.status(400).send({err: err.massege})
    }
})

// get
storeRoutes.get('/',async(req, res)=>{
try{
const storedata = await StoreModel.find()
res.status(200).send(storedata)
console.log(storedata)
}catch(err){
    res.status(400).send({err: err.massege})
}
})

//update
storeRoutes.patch('/update/:storedataID', async(req, res)=>{
  const {storedataID} = req.params;
  console.log(storedataID)
  const storedata = await StoreModel.findOne({_id:storedataID })
  console.log(storedata)
  try{
 await StoreModel.findByIdAndUpdate({_id:storedataID}, req.body)
res.status(200).send(`Store Items id:${storedataID} has been updated`)

  }catch(err){
    res.status(400).send({err: err.massege})

  }
})

// delete
storeRoutes.delete('/delete/:storeId',async(req, res)=>{
  const {storeId } = req.params
   try{
 await StoreModel.findByIdAndDelete({_id:storeId})
res.status(200).send(`Store Items id:${storeId} has been deleted`)

   }catch(err){
    res.status(400).send({err: err.massege})
   }
})

module.exports = {
    storeRoutes
}