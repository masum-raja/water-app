const {Router}=require("express")

const {detailsModel}=require("../Models/details.model")

const adminRoute=Router()


adminRoute.post("/",async(req,res)=>{
    const {name,address,number}=req.body
    try{
        const data=detailsModel({name,address,number});
        await data.save()
        res.status(200).send({message:"Data posted successfully"})
    }catch(err){
        console.log(err)
    }
})


module.exports={adminRoute}