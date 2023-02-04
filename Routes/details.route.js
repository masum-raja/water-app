const {Router}=require("express")

const {detailsModel}=require("../Models/details.model")
const {deleteModel}=require("../Models/delete.model")

const infoRoute=Router()

infoRoute.get("/",async(req,res)=>{

    try{
        const data=await detailsModel.find()
        res.send({data})
    }catch(err){

    }
})

infoRoute.post("/create",async(req,res)=>{
    const {name,address,number}=req.body
    try{
        const data=detailsModel({name,address,number});
        await data.save()
        res.status(200).send({message:"Data posted successfully"})
    }catch(err){
        console.log(err)
    }
})

infoRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        let data=await detailsModel.findById({_id:id})
        let newData=deleteModel({name:data.name,number:data.number,address:data.address})
        await newData.save()
        await detailsModel.deleteOne({_id:id})
        res.send({msg:"Deleted Successfully"})
    }catch(err){
        console.log(err)
    }
})

module.exports={infoRoute}