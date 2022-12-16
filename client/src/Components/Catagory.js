import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Container } from 'react-bootstrap';
import Img1 from '../assets/Img/cat6.png';
import Img2 from '../assets/Img/catagory1.jpg';
import Img3 from '../assets/Img/catagory4.jpg';
import { Link } from 'react-router-dom';

const Catagory = () => {
  return (
    <div style={{marginTop:"125px"}}>
        <Container>
            <h1 className='text-center Catagory_head'>Product Catagory</h1>

        <Slide slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
        }, {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        }]}>
            <Link to='fruits' style={{textDecoration:"none",color:'white'}}>
            <div style={{
            textAlign: 'center',
             position:"relative",
            background: `url("${Img2}")`,
            backgroundSize:'cover',
            borderRadius:"50%",
            width:'70%',
             height:'50%',
             marginTop:'100px',
            marginLeft:'auto',
            marginRight:'auto',
            fontSize: '30px'
           
        }} className='Cat'>
           <div class="overlay">
                <div class="text">Fruits</div>
            </div>
            
        </div>
        </Link>

        <div style={{
            textAlign: 'center',
             position:"relative",
            background: `url("${Img1}")`,
            backgroundSize:'cover',
            borderRadius:"50%",
            width:'70%',
             height:'50%',
             marginTop:'100px',
            marginLeft:'auto',
            marginRight:'auto',
            fontSize: '30px'
           
        }} className='Cat'>
           <div class="overlay">
                <div class="text">Fish</div>
            </div>
        </div>
        
        <div style={{
            textAlign: 'center',
             position:"relative",
            background: `url("${Img3}")`,
            backgroundSize:'cover',
            
            borderRadius:"50%",
            width:'70%',
             height:'50%',
             marginTop:'100px',
            marginLeft:'auto',
            marginRight:'auto',
            fontSize: '30px'
           
        }} className='Cat'>
           <div class="overlay">
                <div class="text">Meat</div>
            </div>
        </div>
        
        <div style={{
            textAlign: 'center',
            background: 'green',
            padding: '200px 0',
            fontSize: '30px'
        }}>Fourth Slide</div>
                <div style={{
            textAlign: 'center',
            background: 'blue',
            padding: '200px 0',
            fontSize: '30px'
        }}>Sixth Slide</div>
                <div style={{
            textAlign: 'center',
            background: 'indigo',
            padding: '200px 0',
            fontSize: '30px'
        }}>Seventh Slide</div>
                <div style={{
            textAlign: 'center',
            background: 'violet',
            padding: '200px 0',
            fontSize: '30px'
        }}>Eight Slide</div>
            </Slide>
        </Container>
     
    </div>
  )
}

export default Catagory
