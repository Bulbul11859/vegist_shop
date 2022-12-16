import React, { useState,useContext  } from 'react';
import { Card,Form,Button,Row,Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Link,useNavigate  } from "react-router-dom";
import { Store } from '../Store';

import axios from "axios";
import '../style.css'

const Login = () => {

  const navigate = useNavigate();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    let{state,dispatch}=useContext(Store)



    let handleSubmit=async (e)=>{
       
        e.preventDefault()
        
        if( !email || !password ){
         
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
        let {data}=await axios.post("http://localhost:8000/login",{
          
           email:email,
           password:password,
        
        })
      
        if(data.data){
          toast.success(data.message, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });


            dispatch({type:'USER_LOGIN',payload:data.data})
            localStorage.setItem('userInfo',JSON.stringify(data.data))
            navigate("/");
            
        }
        else{
          toast.error(data.message, {
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
       
       
   }
  return (
    <div className='Login' style={{margin:"auto",textAlign:"center"}}>
    <div className='Login_bg'></div>
    <Container>
   
      <Card style={{ width: '100%',display: "inline-block",textAlign:"left",marginTop:"40px"}}>
      <Row>
      <Col sm={5}>
    <Card.Body>
    
      <Card.Title className='Signin_Up text-center'>Sign In</Card.Title>
      <Card.Text>
      
     
      <Form>
  

    <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Group>
   
    <button class="custom-btn btn-7 mb-4" style={{width:"100%"}} onClick={handleSubmit}><span>Sign Up</span></button>
  
    <Form.Text className="text-muted ">
          You already have an account? <Link to='/register' style={{textDecoration:"none"}}>Register Now</Link>
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
      </ul>
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

export default Login
