import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <Card style={{zIndex:'-200',marginTop:"-5rem"}} className="w-100  text-center bg-dark text-light  p-5">
       
        <Card.Body className="pt-5 mt-5">
          <div className="d-md-flex justify-content-around flex-wrap">

            <div className="d-flex pt-3">
            <div className='h-100'> <img src={logo} className='' alt="" /> </div>
            <div className='fs-2 fw-semibold'>Avada</div>
            <div className='fs-2 fw-bold text-success'>:</div>
            </div>
            <div className="">
              <ul className="list-unstyled text-start pt-3 ">
                <li><Link className="text-light text-decoration-none">Help Center</Link></li>
                <li><Link className="text-light text-decoration-none">Avada Studio</Link></li>
                <li><Link className="text-light text-decoration-none">Prebuilt Websites</Link></li>
                <li><Link className="text-light text-decoration-none">Reviews</Link></li>
                <li><Link className="text-light text-decoration-none">Submit A Ticket</Link></li>
              </ul>
            </div>
            <div className=" list-unstyled text-start pt-3">
            <li><Link className="text-light text-decoration-none">About Us</Link></li>
                <li><Link className="text-light text-decoration-none">Careers</Link></li>
                <li><Link className="text-light text-decoration-none">Support Policy</Link></li>
                <li><Link className="text-light text-decoration-none">Terms And Conditions</Link></li>
                <li><Link className="text-light text-decoration-none">Privacy Policy</Link></li>
            </div>
            <div  className=" pt-3 text-start ">
              <p>Sign up to our newsletter and get all of the latest news  and updates.</p>
              <div style={{width:"70%",height:"3rem",zIndex:"2000"}} className="rounded-2 bg-light d-flex align-items-center justify-content-center">
                <div>< input className=" border- w-100 " type="text" /></div>
                <div>
                <Button className="ms-2" variant="dark">
                    Search
                  </Button>
                </div>
              </div>
            </div>

          </div>
          
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
