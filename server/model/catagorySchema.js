const mongoose = require('mongoose');
const { Schema } = mongoose;

const catagorySchema=new Schema({
    catagory:{
        type:String,
        required:true
    }
})

const Catagory=mongoose.model('Catagory', catagorySchema);

module.exports=Catagory