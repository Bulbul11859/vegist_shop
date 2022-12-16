import React, { useContext } from 'react';
import { Button,Navbar,Container,Nav,NavDropdown,Form,Dropdown,SplitButton } from 'react-bootstrap';

import Logo from '../assets/Img/logo.png';
import '../style.css';
import { Link } from "react-router-dom";
import { Store } from '../Store';




const Menubar = () => {

  const{state,dispatch}=useContext(Store)
 

  let handleLogout=()=>{
    dispatch({type:'USER_LOGOUT'})
    localStorage.removeItem("userInfo");
    
  }
  return (
    <div>
       <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand >
        <Link to="/" style={{textDecoration:"none"}}><img src={Logo} /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto ">
        
          <Form className="d-flex" style={{width:"400px",position:"relative",marginTop:"15px"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{borderRadius:"50px" ,border:"solid 1px #000000"}}
                  />
                  <span className='searchbar'>

                  <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                  </span>
                
                </Form>
          </Nav>

         
          <Nav  style={{marginTop:"16px"}}>
           
           <div style={{marginRight:"15px"}}>
            <i className="fa-regular fa-user" style={{fontSize:"38px"}}></i>
            </div>
            <Nav.Link  href="#account" className='text-dark'  style={{position:"relative",marginRight:"65px",top:"-5px"}}>
              {state.userInfo?
              <>
                
          <SplitButton
            key="Primary"
          
            variant="primary"
            title="Dashboard"
          >
            <Dropdown.Item eventKey="1">{state.userInfo.name}</Dropdown.Item>
            <Dropdown.Item ><Link to='dashboard'>Upload Product</Link></Dropdown.Item>
            <Dropdown.Item eventKey="3" >
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" onClick={handleLogout}>Logout</Dropdown.Item>
          </SplitButton>
       
              </>
              :
              <div>
              <span style={{color:"#FD9B07"}}>Account</span> 
              
              <span className='text-dark Account'><Link to="register" style={{textDecoration:"none"}}>Register</Link> |<Link to="login" style={{textDecoration:"none"}}> Log in</Link></span>
              </div>
              }
           
            </Nav.Link>
            <Nav.Link href="#deets" className='text-dark' style={{marginRight:"28px"}}>
            <i className="fa-regular fa-heart" style={{fontSize:"30px"}}></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#love" className='text-dark'>
            <i className="fa-solid fa-bag-shopping" style={{fontSize:"30px"}}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    <Container>
    <div className='devide_nav'></div>
    </Container>
{/* 
    <Navbar variant="light">
        <Container>
          <Nav className="nav_middle">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shope</Nav.Link>
            <Nav.Link href="#collection">Collection</Nav.Link>
            <Nav.Link href="#page">Page</Nav.Link>
            <Nav.Link href="#feature">Feature</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#buy">Buy Vegist</Nav.Link>
          </Nav>
          
          

          <Nav className="nav_middle">
           
          <div style={{marginRight:"15px"}}>
          
            <i className="fa-solid fa-headphones" style={{fontSize:"38px"}}></i>
            </div>
            <Nav.Link  href="#hotline" className='text-dark'  style={{position:"relative",top:"-5px",marginRight:"26px"}}>
             <span style={{color:"#FD9B07"}}>Hotline</span> 
             <span className='text-dark Account'>+8801991041204</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
   
    </div>
  )
}

export default Menubar
