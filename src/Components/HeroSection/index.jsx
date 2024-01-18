/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import HeadingComponent from "../HeadingComponent";
import BtnComponent from "../BtnComponent";

function HeroSection() {
  return (
    <HeroContainerStyle>
      <Container>
        <Row>
          <Col
            lg={6}
            md={12}
            className='py-5 text-white'>
            <HeadingComponent
              headingText='So What You'
              headingSpan='Dream Of...'
              headingStyle='pt-5 heading'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aperiam omnis atque magnam minus eligendi.
            </p>
            <BtnComponent btnStyle='btn btn-outline-light btn-lg fs-6 abc px-4' />
          </Col>
          <Col
            lg={6}
            className='pt-5 d-none d-lg-block'>
            <img
              src='/img/book.png'
              className='img-fluid book'
            />
          </Col>
        </Row>
      </Container>
    </HeroContainerStyle>
  );
}

export default HeroSection;
const HeroContainerStyle = styled.div`
  @media (max-width: 992px) {
    height: 50%;
  }
  @media (max-width: 500px) {
    .heading {
      font-size: 3rem !important;
      font-weight: 100;
    }
  }
  background-image: url(/img/mountains.jpg);
  background-size: cover;
  height: 97vh;
  background-blend-mode: multiply;
  background-color: rgba(50, 146, 166, 0.7);
  text-align: center;
  .heading {
    font-size: 5rem;
    font-weight: 100;
  }
  .abc:hover {
    background-color: transparent;
  }
  .book {
    max-height: 630px;
  }
`;
