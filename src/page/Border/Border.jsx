import React from "react";
import banner from "../../assets/banner.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaArrowRight } from "react-icons/fa";
import  { useEffect } from 'react';
const Border = () => {
  useEffect(() => {
    const consoleText = (words, id) => {
      let visible = true;
      let con = document.getElementById('console');
      let letterCount = 1;
      let x = 1;
      let waiting = false;
      let target = document.getElementById(id);

      const interval1 = window.setInterval(() => {
        if (letterCount === 0 && !waiting) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(() => {
            let usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && !waiting) {
          waiting = true;
          window.setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (!waiting) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);

      const interval2 = window.setInterval(() => {
        if (visible) {
          con.className = 'console-underscore hidden';
          visible = false;
        } else {
          con.className = 'console-underscore';
          visible = true;
        }
      }, 400);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
      };
    };

    consoleText(['Wordpress. ', 'Online store', 'Protfolio'], 'text');
  }, []); 
  return (
    <Container fluid>
      <div className="d-lg-flex ">
        <div className="ps-4  ">
          <div className="py-5 fs-5">
            <h1>The Ultimate</h1>
            <div className="console-container d-flex">
              <h1 id="text"></h1>
              <div className="console-underscore " id="console">
                <h1>|</h1>
              </div>
            </div>
            <h1>Website Builder</h1>
          </div>

          <p className="pb-4">
            Trusted by beginners, marketers & professionals; Built with
            usability and performance in mind.
          </p>
          <Button variant="dark" className="px-5 round">
            Start Building
            <span className="arrow ms-2">
              <FaArrowRight />
            </span>
          </Button>
          <div className="mt-5">
            <Row>
              <Col>
                <h2>925k+</h2>
                <p>People Trust Avada</p>
              </Col>
              <Col>
                <h2>25k+</h2>
                <p>Average 5-Star Reviews</p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="text-lg-center col-lg-8">
          <img src={banner} style={{ width: "95%" }} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Border;
