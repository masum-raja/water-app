const mongoose=require("mongoose");

const deleteSchema=mongoose.Schema({
    name:String,
    number:String,
    address:String,
    date:{type:String,default:new Date().toLocaleString()},
})

const deleteModel=mongoose.model("restore",deleteSchema);

module.exports={deleteModel}