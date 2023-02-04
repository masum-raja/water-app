const mongoose=require("mongoose");

const detailsSchema=mongoose.Schema({
    name:String,
    number:String,
    address:String,
    date:{type:String,default:new Date().toLocaleString()},
})

const detailsModel=mongoose.model("info",detailsSchema);

module.exports={detailsModel}