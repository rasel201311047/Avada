import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa";
import im1 from "../assets/web.png";
const Buildaba = () => {
  return (
    <div className=" mt-5 rounded-1 " style={{ backgroundColor: "#b7f598" }}>
      <Container fluid>
        <div className="d-lg-flex justify-content-center p-5">
          <div className="ps-4 col-lg-6 ">
            <div className="pt-5 fs-5">
              <h1>Build Successful</h1>
              <h1>Websites With Avada</h1>
            </div>

            <p className="py-2">
              Whether you are a beginner, marketer, or professional, Avada has
              the tools & resources you can rely on to succeed.
            </p>
            <Button variant="dark" className="px-5 round">
                  Buy Avada For $69
                  <span className="arrow ms-2"><FaArrowRight /></span>
            </Button>
          </div>
          <div className="text-lg-center col-lg-5 ">
            <img src={im1} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Buildaba;
