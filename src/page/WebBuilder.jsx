import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image1 from "../assets/w1.png";
import image2 from "../assets/w2.png";
import image3 from "../assets/w3.png";
import image4 from "../assets/w4.png";
import image5 from "../assets/w5.png";
import image6 from "../assets/w6.png";
const WebBuilder = () => {
    const data = [
        {
          id: 1,
          image: image1,
          header: "101 Prebuilt Websites",
          paragraph: "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
        },
        {
          id: 2,
          image: image2,
          header: "120+ Design Elements",
          paragraph: "Packed with options, they are highly flexible for any design & for any purpose. The only limit is your imagination.",
        },
        {
            id: 3,
            image: image3,
            header: "Built For Performance",
            paragraph: "Experience total control of your website’s features that will empower you to make superior performance-related decisions.",
        },
        {
            id: 4,
            image: image4,
            header: "Mobile Friendly",
            paragraph: "Avada is 100% fluid & responsive across all device types, from mobile to desktop & tablets, with no compromise.",
          },
          {
            id: 5,
            image: image5,
            header: "Dynamic Content",
            paragraph: "Build unique pages & post layouts for your website by harnessing the power of Avada’s dynamic content functionality.",
          },
          {
              id: 6,
              image: image6,
              header: "Online Store Builder",
              paragraph: "Avada is integrated with WooCommerce, allowing you to build successful online stores to sell anything online.",
          } 
      ];
  return (
    <div>
      <div className="text-center mt-5">
        <h2>All-In-One Website Builder</h2>
        <p>Experience total control over your website creation process</p>

        <Row xs={1} md={3} className="g-3 mt-4" >
          {data.map((idx) => (
            <Col key={idx.id}  >
              <Card className="border-0">
                <Card.Img variant="top" style={{height:"15rem"}} src={idx.image} />
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
        <Button className="mt-3 px-5 py-3" variant="dark">Discover More</Button>
      </div>
    </div>
  );
};

export default WebBuilder;
