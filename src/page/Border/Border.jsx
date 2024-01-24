import React from "react";
import banner from "../../assets/banner.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Border = () => {
  return (
    <Container fluid>
      <div className="d-lg-flex ">
        <div className="ps-4  ">
            <div className="py-5 fs-5">
            <h1>The Ultimate</h1>
            <h1>Website Builder</h1>
            </div>

          <p className="pb-4">
            Trusted by beginners, marketers & professionals; Built with
            usability and performance in mind.
          </p>
          <Button className="px-5 py-3" variant="outline-dark">Start Building </Button>
          <div className="mt-5">
            <Row>
              <Col>
                <h2>925k+</h2>
                <p>People Trust Avada</p>
              </Col>
              <Col>
                <h2>25k+</h2>
                <p >Average 5-Star Reviews</p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="text-lg-center col-lg-8">
          <img src={banner} style={{width:"95%"}} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Border;
