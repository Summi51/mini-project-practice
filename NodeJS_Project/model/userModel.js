const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type: String, require:true},
    gender : {type: String, required: true},
    email:{type: String, required:true},
    password: {type:String, required: true},
    isAdmin: { type: String, default: "false" }
},{
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema)

module.exports={
    UserModel
}