const jwt=require("jsonwebtoken");
require("dotenv").config();

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];

    if(token){
        const decode=jwt.verify(token,process.env.private_key)
        if(decode){
            next()
        }else{
            res.send({message:"unauthorized! please login"})
        }

    }else{
        res.send({message:"unauthorized! please login"})
    }
}

module.exports={auth}