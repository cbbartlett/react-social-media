const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();


mongoose.connect(process.env.MONGODB).then(()=>
console.log("DB connection successfull")).catch(()=>{
          console.log("Some error occured")
})