const mongoose=require('mongoose')
require('dotenv').config()

const uri=process.env.MONGO_URI
const connectToDB= async ()=>{
    try{
       await  mongoose.connect(uri)
       console.log("Connected Successfully")
    }catch(err){
            console.log("Connection is not done",err)
            process.exit(1)
    }


}


module.exports= connectToDB

