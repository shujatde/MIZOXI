/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import SimpleCardParent from "../SimpleCardParent";
import styled from "styled-components";
import Book from "../Book";
import AccordionComponent from "../Accordion";
function About() {
  return (
    <AboutContainer id='about'>
      <Container>
        <Row>
          <SimpleCardParent />
        </Row>
      </Container>
      <div className='py-3 bg-light'>
        <Book heading1Text='Why this book' />
        <AccordionComponent />
      </div>
    </AboutContainer>
  );
}
export default About;
const AboutContainer = styled.div``;
