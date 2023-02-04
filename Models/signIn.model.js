const mongoose=require("mongoose");

const signInSchema=mongoose.Schema({
    email:String,
    password:String
})

const signInModel=mongoose.model("auth",signInSchema)

module.exports={signInModel}