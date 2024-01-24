import React from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image1 from "../assets/c1.png";
import image2 from "../assets/c2.png";
import image3 from "../assets/c3.png";
import image4 from "../assets/c4.png";
import { Container } from 'react-bootstrap';
const Comunity = () => {
    const data = [
        {
          id: 1,
          image: image1,
          header: "World-Class Support",
          paragraph: "We build long-term professional relationships with our customers that you can rely on & trust.",
        },
        {
          id: 2,
          image: image2,
          header: "Documentation & Tutorials",
          paragraph: "Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.",
        },
        {
            id: 3,
            image: image3,
            header: "100% Built In-House",
            paragraph: "Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.",
        },
        {
            id: 4,
            image: image4,
            header: "Free Lifetime Updates",
            paragraph: "Your website will receive free & regular updates, compatible with industry standards & trends, for life.",
        }
      ];
    return (
        <div className=''>
        <div style={{backgroundColor:"#f1f1f1"}} className="pb-5 text-center mt-5 pt-5">
        <h2 className='pt-4'>942,911 Website Owners<br></br>
           Trust Avada</h2>
        <p>The #1 selling Website Builder on Themeforest for 11+ years.</p>
        <Container fluid>
        <Row xs={1} md={4} className=" mt-4" >
          {data.map((idx) => (
            <Col key={idx.id}  >
              <Card className="border-0 pt-4" style={{backgroundColor:"#f1f1f1"}}>
                <Card.Img variant="top" className='mx-auto' style={{width:"6rem",height:"5rem"}} src={idx.image} />
                <Card.Body>
                  <Card.Title>{idx.header}</Card.Title>
                  <Card.Text>
                  {idx.paragraph}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        </Container>
        </div>
        </div>
    );
};

export default Comunity;