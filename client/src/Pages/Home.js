import React from 'react'
import Banner from '../Components/Banner'
import Products from '../Components/Products'
import { Button,Navbar,Container,Nav,NavDropdown,Form } from 'react-bootstrap';
import Catagory from '../Components/Catagory';


const Home = () => {
  return (
    <div>
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
      </Navbar> 
      <Banner/>
      <Products/>
      <Catagory/>

    </div>
  )
}

export default Home
