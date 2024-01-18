/** @format */

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

function Header() {
  return (
    <div id='home'>
      <Navbar
        expand='lg'
        className='navbar-light fs-4 p-3'>
        <Container>
          <StyledNavbarBrand href='#home'>
            <img
              src='/img/mlogo.png'
              alt='logoImage'
            />
            <h3>MIZUXI</h3>
          </StyledNavbarBrand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-center mb-2 '>
              <Nav.Link
                href='#home'
                className='ps-4'>
                Home
              </Nav.Link>
              <Nav.Link
                href='#about'
                className='ps-4'>
                about
              </Nav.Link>
              <Nav.Link
                href='#meet'
                className='ps-4'>
                meet the auther
              </Nav.Link>
              <Nav.Link
                href='#contact'
                className='ps-4'>
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

const StyledNavbarBrand = styled(Navbar.Brand)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
  }
`;
