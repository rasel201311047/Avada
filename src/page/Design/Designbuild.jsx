import React, { useState } from 'react';
import im1 from "../../assets/logo.png";
import Button from "react-bootstrap/Button";

const Designbuild = () => {
  const element=["https://avada.com/wp-content/uploads/2021/07/live-visual.jpg",
    "https://avada.com/wp-content/uploads/2021/07/layout-builder-4.jpg",
    "https://avada.com/wp-content/uploads/2021/07/header-builder-5.jpg",
    "https://avada.com/wp-content/uploads/2023/03/mega-menu-feature.jpg",
    "https://avada.com/wp-content/uploads/2021/07/footer-builder-5.jpg",
    "https://avada.com/wp-content/uploads/2021/07/form-builder.jpg",
    "https://avada.com/wp-content/uploads/2023/03/off-canvas-feature.jpg",
    "https://avada.com/wp-content/uploads/2023/03/setup-wizard-1.jpg",
    "https://avada.com/wp-content/uploads/2021/07/performance-wizard.jpg"

  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const handleimagesecion=(y)=>{
    setSelectedImageIndex(y);
    
  }
 
    return (
      <div >
        <div className='text-center mt-2 mb-5'>
          <img className='py-3' style={{height:"",width:"4rem"}} src={im1} alt="" />
          <h2 className='py-3 fs-1'>Design Anything, Build Everything</h2>
          <p style={{color:"gray"}} className=''>Design and launch your website fast & no coding knowledge is required.</p>

        </div>
        <div className='d-lg-flex  w-100'>
          <div className='col-lg-3  list-unstyled text-start '>
            <li><Button onClick={()=>handleimagesecion(0)} className='px-5 py-3 border w-100'>Live Visual Builder</Button></li>            
            {
              selectedImageIndex==0 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            
            <li><Button onClick={()=>handleimagesecion(1)}  className='px-5  py-3 border w-100'>Layout Builder</Button></li>
            {
              selectedImageIndex==1 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(2)} className='px-5  py-3 border w-100'>Header Builder</Button></li> 
            {
              selectedImageIndex==2 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(3)} className='px-5  py-3 border w-100'>Mega</Button></li>
            {
              selectedImageIndex==3 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(4)} className='px-5  py-3 border w-100'>Footer Builder</Button></li>
            {
              selectedImageIndex==4 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(5)} className='px-5  py-3 border w-100'>Form Builder</Button></li>
            {
              selectedImageIndex==5 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(6)} className='px-5  py-3 border w-100'>Off Canvas</Button></li>
            {
              selectedImageIndex==6 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(7)} className='px-5  py-3 border w-100'>Setup Wizard</Button></li>
            {
              selectedImageIndex==7 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
            <li><Button onClick={()=>handleimagesecion(8)} className='px-5  py-3 border w-100'>Performance Wizard</Button></li>
            {
              selectedImageIndex==8 &&
                <li className='d-lg-none'> <img style={{width:"100%",height:"90%"}} className='mt-2' src={element[selectedImageIndex]} alt="" /></li>
              }
          </div>
          <div className='ms-2 text-center d-none d-lg-block my-auto'>
            <img style={{width:"95%",height:"90%"}} className='' src={element[selectedImageIndex]} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Designbuild;