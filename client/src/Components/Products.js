import React from 'react'
import { Carousel,Col,Container,Row  } from 'react-bootstrap';

const Products = () => {
  return (
    <div className='Products'>
        <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div className='Products_bg1'>

            <div style={{marginLeft:"20px"}}>
             <h2 style={{width:"70%",fontFamily:"Roboto",fontSize:"32px",lineHeight:"42px",color: "#FFFFFF"}}>Fresh fruits, vagetable on our product</h2>
             <button className='product_button'>see our Products</button>
             </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
           <div className='Products_bg2'>
            <div style={{marginLeft:"20px"}}>
            <h2 style={{width:"70%",fontFamily:"Roboto",fontSize:"32px",lineHeight:"42px",color: "#0F0E0E"}}>Vagetable eggplant 100% fresh food</h2>
            <button className='product_button'>see our Products</button>
            </div>
          </div>
        </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Products
