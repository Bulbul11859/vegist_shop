import React, { useState } from 'react';
import { Card,Form,Button,Row,Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

import axios from "axios";
import '../style.css'


const Register = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmpassword,setConfirmpassword]=useState('')
  const [err,setErr]=useState('')
   

let handleSubmit=(e)=>{
     console.log('rtgrtgrg');
     e.preventDefault()
     
     if(!name || !email || !password || !confirmpassword){
      
       toast.error('𝑷𝒍𝒆𝒂𝒔𝒆 𝒇𝒊𝒍𝒍 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }
     else if(password.length <6 || confirmpassword.length <6){
      console.log("Password Should be more than 6 Character")
        toast.error('𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥 𝘚𝘩𝘰𝘶𝘭𝘥 𝘣𝘦 𝘮𝘰𝘳𝘦 𝘵𝘩𝘢𝘯 6 𝘊𝘩𝘢𝘳𝘢𝘤𝘵𝘦𝘳!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }
     else if(password!==confirmpassword ){
      console.log("Password Not Match")
        toast.error('𝑷𝒍𝒆𝒂𝒔𝒆 𝒇𝒊𝒍𝒍 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒇𝒊𝒆𝒍𝒅!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }

     else{
      axios.post("http://localhost:8000/register",{
        name:name,
        email:email,
        password:password,
        confirmpassword:confirmpassword
     })
     toast.success('Successfully registered', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
     }

    
}
   

  return (
    <div className='Login' style={{margin:"auto",textAlign:"center"}}>
      <div className='Login_bg'></div>
      <Container>
     
        <Card style={{ width: '100%',display: "inline-block",textAlign:"left",marginTop:"40px"}}>
        <Row>
        <Col sm={5}>
      <Card.Body>
      
        <Card.Title className='Signin_Up text-center'>Sign Up</Card.Title>
        <Card.Text>
        
       
        <Form>
      <Form.Group className="mb-3" >
      <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder='confirm' onChange={(e)=>setConfirmpassword(e.target.value)}/>
      </Form.Group>
      <button class="custom-btn btn-7 mb-4" style={{width:"100%"}} onClick={handleSubmit}><span>Sign Up</span></button>
    
      <Form.Text className="text-muted ">
          You already have an account? <Link to='/login' style={{textDecoration:"none"}}>Login Here</Link>
        </Form.Text>
    </Form>
          
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

        />
{/* 
<ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <span><i class="fab fa-facebook-f"></i></span>
  </li>
  <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <span><i class="fab fa-twitter"></i></span>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span><i class="fab fa-instagram"></i></span>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <span><i class="fab fa-github"></i></span>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <span><i class="fab fa-youtube"></i></span>
  </li>
</ul> */}
        </Card.Text>
        
      </Card.Body>
      </Col>
        <Col sm={7} className="Login_sideBG">
        </Col>
      </Row>
    </Card>
       
      </Container>
    
    </div>
  )
}

export default Register
