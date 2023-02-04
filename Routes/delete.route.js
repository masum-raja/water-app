const {Router}=require("express")

const {deleteModel }=require("../Models/delete.model")
const deleteRoute=Router()

deleteRoute.get("/",async(req,res)=>{
    try{
        let data= await deleteModel.find()
        res.send({data})
    }catch(err){
        console.log(err)
    }
})

module.exports={deleteRoute}