const express=require("express")
const cors=require("cors")
require("dotenv").config()



const {connection}=require("./Config/db")
const {infoRoute}=require("./Routes/details.route")
const {deleteRoute}=require("./Routes/delete.route")
const {signInRoute}=require("./Routes/signIn.route")
const {adminRoute} = require("./Routes/admin.route")
const {auth}=require("./Middleware/authentication")


const app=express();


app.use(express.json());
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/signin",signInRoute)
app.use("/create",adminRoute)
app.use(auth)
app.use("/info",infoRoute)
app.use("/restore",deleteRoute)



app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log({"mssg":"Connected successfully to DB"})
    }catch(err){
        console.log(err)
        console.log(({"mssg":"Connection fail to DB"}))
    }
    console.log(`listening on port ${process.env.port}`)
})