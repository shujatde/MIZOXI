/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../ContactForm";
import styled from "styled-components";
function ContactComponent() {
  return (
    <div
      className='bg-light py-5 mt-5'
      id='contact'>
      <CustomContainer>
        <Row>
          <Col
            lg={9}
            md={12}>
            <h3>Get In Touch</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              commodi.
            </p>
            <ContactForm />
          </Col>
          <Col
            lg={3}
            className='d-none d-lg-block'>
            <img
              src='/img/mlogo.png'
              alt='LogoRepresentation'
              className='logo'
            />
          </Col>
        </Row>
      </CustomContainer>
    </div>
  );
}

export default ContactComponent;
const CustomContainer = styled(Container)`
  img {
    width: 100%;
    margin-top: 5rem;
  }
`;
