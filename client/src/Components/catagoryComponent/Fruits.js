import React, { useEffect } from 'react';
import axios from 'axios';
import { Carousel,Col,Container,Row  } from 'react-bootstrap';


const Fruits = () => {

    useEffect(()=>{
        async function fruit(){
            let{data}=await axios.get('http://localhost:8000/fruits')
            console.log(data);
        }
        fruit()
    },[])
    
  return (
    <div className='Fruits'>
        <Container>
      <Row>
        <Col xs={12} sm={12} md={4} lg={3}>
          <div className='Products_bg1' >

            <div style={{marginLeft:"20px"}}>
             
             </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={3}>
          <div className='Products_bg2'>

            <div style={{marginLeft:"20px"}}>
           
             </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={4} lg={3}>
          <div className='Products_bg3'>

            <div style={{marginLeft:"20px"}}>
            
             </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={3}>
          <div className='Products_bg4'>

           
          </div>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Fruits
