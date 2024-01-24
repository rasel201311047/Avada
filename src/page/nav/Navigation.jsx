import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import { FaAtlassian } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className='ms-4 me-4'>
            <Navbar.Brand href="#" className=' d-flex align-items-center gap-2'> 
            <div className='h-100'> <img src={logo} className='w-100 h-100' alt="" /> </div>
            <div className='fs-2 fw-semibold'>Avada</div>
            <div className='fs-2 fw-bold text-success'>:</div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 ms-auto"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-dark"> <span><BsStars /></span> My Avada</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default Navigation;