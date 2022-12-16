const express = require('express');
const { restart } = require('nodemon');
const router = express.Router()
const User=require('../model/userSchema');
const Product=require('../model/productSchema')
const Catagory=require('../model/catagorySchema')
const bcrypt = require('bcrypt');



router.get('/', function (req, res) {
    res.send('Hello World app js')
  })

  

  router.post('/register',async function (req, res) {
    const {name,email,password,confirmpassword}=req.body;
  
   
      
      if(!name || !email || !password || !confirmpassword){
        return res.status(422).json({error:"Plz Filled The All field"})
       }
       else{
        const userExist=await User.findOne({email:email})
        if(userExist){
          console.log("Email Already Exists")
          res.status(201).json({message:"Email Already Exists"})
        }
        else{
          bcrypt.hash(password, 10, function(err, hash) {
            let data={
             name:req.body.name,
             email:req.body.email,
             password:hash,
             confirmpassword:hash
           }
             const user=new User(data);
       
             user.save().then(()=>{
               res.status(201).json({message:"user register successfully"})
             }).catch((err)=>res.status.apply({err:"register failed"}))
           });
        }
      
      
      }
     

  })


  router.post('/login',async function (req, res) {
    
     const data=await User.findOne({email:req.body.email})
     console.log(data);
    if(data){
      console.log('Yes Access')
      bcrypt.compare(req.body.password, data.password, function(err, result) {
        if(result){
          console.log("Password Match")
          res.status(201).json({data:data,message:"Register Successfully"})
        }
        else{
          console.log("Password not Match")
          res.status(201).json({message:"Password Wrong"})
        }
        
    });
    }
    else{
      console.log('Email Not Exists')
      res.status(201).json({message:"Email Not Exists"})
      
    }


    
  })

router.post('/dashboard', async function (req, res) {
       
       const {Productname,Description,picture,Price,Catagory,Quantity}=req.body
       let data={
        Productname:Productname,
        Description:Description,
        picture:picture,
        Price:Price,
        Catagory:Catagory,
        Quantity:Quantity
       }
       const product = new Product(data);
       await product.save();

       res.send(product)

  })

router.post('/catagory',async function (req, res) {
  console.log(req.body.catagory);
  const data={
    catagory:req.body.catagory
  }

  const catagory = new Catagory(data);
       await catagory.save();

       res.send(catagory)
  })

  router.get('/catagory',async function (req, res) {

      let data=await Catagory.find()
    
         res.send(data);
    })
  
    router.get('/fruits',async function (req, res) {

      let data=await Product.find({Catagory:'Fish'})
    
         res.send(data);
    })



  

  module.exports=router
