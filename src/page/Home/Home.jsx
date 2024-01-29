import React from "react";
import Navigation from "../nav/Navigation";
import Border from "../Border/Border";
import Container from "react-bootstrap/Container";
import Course from "../cources1/Course";
import WebBuilder from "../WebBuilder";
import Comunity from "../Comunity";
import Sqrcomu from "../Sqrcomu";
import Ques from "../Ques";
import Buildaba from "../Buildaba";
import Footer from "../Footer";
import Designbuild from "../Design/Designbuild";
const Home = () => {
  return (
    <div>
      <Container>
        <Navigation></Navigation>
        <Border></Border>
        <Course></Course>
        <Designbuild></Designbuild>
        <WebBuilder></WebBuilder>
      </Container>
      <Comunity></Comunity>
      <Sqrcomu></Sqrcomu>
      <Container>
        
        <Buildaba></Buildaba>
      </Container>
      <Footer></Footer>

    </div>
  );
};

export default Home;
