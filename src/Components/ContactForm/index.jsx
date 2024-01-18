/** @format */

import React from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
function ContactForm() {
  return (
    <FormContainer>
      <Form>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>
            <i class='fa-solid fa-user'></i>
          </InputGroup.Text>
          <Form.Control
            placeholder='Name'
            aria-label='Username'
            aria-describedby='basic-addon1'
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>
            <i class='fa-solid fa-envelope'></i>
          </InputGroup.Text>
          <Form.Control
            type='email'
            placeholder='Email'
            aria-label='Username'
            aria-describedby='basic-addon1'
            required
          />
        </InputGroup>

        <InputGroup className='mb-3 textarea'>
          <InputGroup.Text>
            <i class='fa-solid fa-pencil'></i>
          </InputGroup.Text>
          <FormControl
            as='textarea'
            aria-label='With textarea'
          />
        </InputGroup>
        <Button
          type='submit'
          className='button'>
          Subscribe
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ContactForm;
const FormContainer = styled.div`
  .textarea {
    height: 180px;
    width: 100%;
  }
  .button {
    width: 100%;
    background-color: #3292a6;
  }
`;
