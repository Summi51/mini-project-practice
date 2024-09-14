const mongoose = require("mongoose")

const storeSchema= mongoose.Schema({
 title : {type: String, required: true},
 rating : {type: Number, require: true},
 price : {type: Number, require: true},
 category : {type: String, require: true},
}, {
    versionKey: false
})

const StoreModel = mongoose.model("storedata",storeSchema)

module.exports={
    StoreModel
}