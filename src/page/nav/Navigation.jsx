import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import { FaAtlassian } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import im1 from "../../assets/n1.png";
import im2 from "../../assets/n2.png";
import im3 from "../../assets/n3.png";
import { BsStars } from "react-icons/bs";
const Navigation = () => {
  return (
    <Navbar expand="lg" className="">
      <Container fluid className="ms-4 me-4 ">
        <Navbar.Brand href="#" className=" d-flex align-items-center justify-content-center gap-2">
          <div className="h-100">
            {" "}
            <img src={logo} className="w-100 h-100" alt="" />{" "}
          </div>
          <div className="fs-2 fw-semibold">Avada</div>
          <div className="fs-2 fw-bold text-success">:</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Avada " id="basic-nav-dropdown" className="px-2">
              <NavDropdown.Item href="#action/3.1"><h3>Live Visual Bu</h3></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Avada For " id="basic-nav-dropdown" className="px-2">
              <NavDropdown.Item href="#action/3.1">
                <div style={{backgroundColor:'#ffe77b'}}  className="d-flex  justify-content-between rounded-3 p-2 align-content-center">
                  <div>
                    <h3>Beginners</h3>
                    <p>Create your own site with ease</p>
                  </div>
                  <div className="">
                     <img src={im1} className="" alt="" />
                  </div>
                </div>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <div style={{backgroundColor:'#b7f598'}}  className="d-flex justify-content-between rounded-3 p-2 align-content-center">
                  <div>
                    <h3>Marketers</h3>
                    <p>Grow your business fast</p>
                  </div>
                  <div className="">
                     <img src={im2} className="" alt="" />
                  </div>
                </div>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <div style={{backgroundColor:'#7ed5f0'}}  className="d-flex  justify-content-between rounded-3 p-2 align-content-center">
                  <div>
                    <h3>Professionals</h3>
                    <p>Optimize your project workflow</p>
                  </div>
                  <div className="">
                     <img src={im3} className="" alt="" />
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="px-2" disabled>
              Hosting
            </Nav.Link>
            <Nav.Link href="#" className="px-2" disabled>
              Customization
            </Nav.Link>
            <NavDropdown title="Resources " className="px-2" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-dark">
              {" "}
              <span>
                <BsStars />
              </span>{" "}
              My Avada
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
