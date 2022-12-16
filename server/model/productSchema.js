const mongoose = require('mongoose');
const { Schema } = mongoose;

const productShema=new Schema({
    Productname:{
        type:String,
        required:true
    },
    Description:{
        type:String,
    },
    picture:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Catagory:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    }

});
const Product = mongoose.model('Product', productShema);

module.exports=Product;
