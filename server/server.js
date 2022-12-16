const express = require('express')
var cors = require('cors')

const app = express()
const mongoose = require('mongoose');

const User=require('./model/userSchema');

require('dotenv').config()


const DB=process.env.DATABASE;


const port=process.env.PORT;


   

mongoose.connect(DB,()=>{
  console.log("DB Connected")
});

app.use(express.json())
app.use(cors())

                 
app.use(require('./router/auth'))  

const middleware=(req, res,next)=>{
  console.log("Middleware")
}




app.listen(port,()=>{
    console.log(`Server is runnning ${port}`)
})