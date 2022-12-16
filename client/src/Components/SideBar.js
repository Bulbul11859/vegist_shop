import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import axios from 'axios';



const SideBar = () => {
  const [productName, setProductName] = useState('');
  const [productCatagory, setProductCatagory] = useState('');
  const [price, setPrice] = useState('');
  const [pic, setPic] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const [active, setActive] = useState(false);
  

  const editor = useRef(null);
	const [content, setContent] = useState('');
 

  const[upload,setUpload]=useState(true)
  const[catagory,setCatagory]=useState(false)


  //catagory 
  const[productcat,setProductcat]=useState('')
  const[uploadcatagory,setUploadcatagory]=useState([])

  let handleUpload=()=>{
   
    setUpload(true)
    setActive(true)
    setCatagory(false)
  
  }

  let handleCatagory=()=>{
    setCatagory(true)
    setUpload(false)
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  let handleProductUpload=()=>{
    if(productName && productCatagory && price && pic && productQuantity){
     axios.post('http://localhost:8000/dashboard',{
      Productname:productName,
      Description:content,
      picture:pic,
      Price:price,
      Catagory:productCatagory,
      Quantity:productQuantity
     })
    }else{
      console.log("Fill all the feild");
    }
  }

  let handleproductcatagory=async()=>{
    console.log('sdfdfdf');
    if(productcat){
    let data=await axios.post('http://localhost:8000/catagory',{
      catagory:productcat
    })
  }
  else{
    console.log('Blank Not Allow');
  }
    
  }

  useEffect(()=>{
       async function Cat(){
            let {data}=await axios.get('http://localhost:8000/catagory');
            setUploadcatagory(data);
        }
        Cat()
  },[])



  console.log(uploadcatagory);
  

  return (
    <div>
     <div style={{ display:"flex", height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem onClick={handleUpload} className={`${upload?"sidebar_active":""}`}> Product Upload</MenuItem>
          <MenuItem onClick={handleCatagory} className={`${catagory?"sidebar_active":""}`}> Catagory</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
     
         {upload &&
      
         <div style={{width:'70%'}}>
           <h1 className='text-center'>Upload Your Product</h1>
           <Container>
           <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Product Name</Form.Label>
        <Form.Control  type="text" placeholder="Small text" onChange={(e)=>setProductName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <JoditEditor
			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Product Picture</Form.Label>
        <Form.Control  type="text" placeholder="Small text" onChange={(e)=>setPic(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control  type="text" placeholder="Small text" onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Catagory</Form.Label>
      <Form.Select aria-label="Default select example" onChange={(e)=>setProductCatagory(e.target.value)}>
      <option>Open this select menu</option>
      {uploadcatagory.map(item=>(
        <option value={item.catagory}>{item.catagory}</option>
      ))
      }
      
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control  type="text" placeholder="Small text" onChange={(e)=>setProductQuantity(e.target.value)}/>
      </Form.Group>


      
      
   
   
      <Button variant="primary" onClick={handleProductUpload}>
        Submit
      </Button>
    </Form>
         <p  dangerouslySetInnerHTML={{ __html: content }}></p>
    </Container>
   
         
         </div>
        
         }

         {catagory &&
          <div style={{width:'70%'}}>
            <h1 className='text-center'>Upload Your Product Catagory</h1>
              <Container>
              <Form.Group className="mb-3" >
                <Form.Label>Product Name</Form.Label>
                <Form.Control  type="text" placeholder="Small text" onChange={(e)=>setProductcat(e.target.value)}/>
              </Form.Group>
               <Button variant="primary" onClick={handleproductcatagory}>
                Submit
              </Button>
              </Container>
          </div>
         }
      
    </div>
   
    </div>
  )
}

export default SideBar
