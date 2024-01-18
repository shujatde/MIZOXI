/** @format */

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

function FormComponent() {
  return (
    <FormContainer className='bg-dark p-5'>
      <Container>
        <Form>
          <Row className='gy-3'>
            <Col
              sm={4}
              xs={12}>
              <Form.Control
                type='text'
                placeholder='Name'
                required
              />
            </Col>
            <Col
              sm={4}
              xs={12}>
              <Form.Control
                type='email'
                placeholder='Email'
                required
              />
            </Col>
            <Col
              sm={4}
              xs={12}>
              <Button
                type='submit'
                className='fs-5'>
                <i class='fa-solid fa-envelope me-2'></i> Subscribe
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </FormContainer>
  );
}

export default FormComponent;
const FormContainer = styled.div`
  input,
  Button {
    height:45px;
  }
  Button {
    width: 100%;
    background-color: rgb(50, 146, 166);
    border-radius: 4px;
    border-none
  }
`;
