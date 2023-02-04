 const {Router}=require("express")
 const jwt=require("jsonwebtoken")
 require("dotenv").config()

 const {signInModel}=require("../Models/signIn.model")

 const signInRoute=Router()

 signInRoute.post("/",async(req,res)=>{
    const {email,password}=req.body
    let user= await signInModel.findOne({email}) 
    if(user.email==email && user.password==password){
        const token=jwt.sign({"UserId":user._id},process.env.private_key)
        res.send({message:"SignIn Successfull",token})
    }else{
        res.send({message:"Something went wrong! Please try again"})
    }
 })



 module.exports={signInRoute}