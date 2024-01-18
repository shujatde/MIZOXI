/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer class='p-5'>
      <Container
        className='p-5
      '>
        <div className='d-flex justify-content-end '>
          <p className='text-white'>Copyright &copy; 2020</p>
        </div>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.div`
  background-color: #3292a6;
`;
