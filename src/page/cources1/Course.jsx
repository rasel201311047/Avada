import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import im1 from "../../assets/card1.png";
import im2 from "../../assets/card2.png";
import im3 from "../../assets/card3.png";
const Course = () => {
  return (
    <div style={{height:""}} className="d-lg-flex py-5 gap-4   justify-content-center  mt-5 pt-5">
      <Card style={{backgroundColor:'#ffe77b'}}  className="text-center mt-2 ">
        <div style={{height:""}} className="p-5 ">
          <h2>For Beginners</h2>
          <h1>Lauch Your  First Website</h1>
          <img style={{height:"40%", width:"50%"}} src={im1} alt="" />
          <div>
          <Button variant="warning" className="bg-warning m-1">Visual Builder</Button>
          <div>
          <Button variant="warning" className="bg-warning  m-1">Documentation</Button>
          <Button variant="warning" className="bg-warning m-1">Support</Button>
          </div>
          <Button variant="warning" className="bg-warning m-1">Prebuilt Websites</Button>
          </div>
        </div>
      </Card>

      <Card style={{backgroundColor:'#b7f598'}}  className="text-center mt-2 ">
        <div className="p-5">
          <h2>For Beginners</h2>
          <h1>Lauch Your First Website</h1>
          <img style={{height:"40%", width:"50%"}} src={im2} alt="" />
          <div>
          <Button variant="Success" style={{backgroundColor:"green", color:"white"}} className=" m-1">Visual Builder</Button>
          <div>
          <Button variant="Success" style={{backgroundColor:"green", color:"white"}} className="  m-1">Documentation</Button>
          <Button variant="Success" style={{backgroundColor:"green", color:"white"}} className=" m-1">Support</Button>
          </div>
          <Button variant="Success" style={{backgroundColor:"green", color:"white"}} className=" m-1">Prebuilt Websites</Button>
          </div>
        </div>
      </Card>
            <Card style={{backgroundColor:'#7ed5f0'}}  className="text-center mt-2 ">
        <div className="p-5">
          <h2>For Beginners</h2>
          <h1>Lauch Your First Website</h1>
          <img style={{height:"40%", width:"50%"}} src={im3} alt="" />
          <div >
          <Button variant="primary" className="bg-primary m-1">Visual Builder</Button>
          <div>
          <Button variant="primary" className="bg-primary  m-1">Documentation</Button>
          <Button variant="primary" className="bg-primary m-1">Support</Button>
          </div>
          <Button variant="primary" className="bg-primary m-1">Prebuilt Websites</Button>
          </div>
        </div>
      </Card>
     

    </div>
  );
};

export default Course;
