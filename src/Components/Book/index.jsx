/** @format */

import React from "react";
import Heading1 from "../Heading1Component";
import styled from "styled-components";
function Book({ heading1Text }) {
  return (
    <BookContainer className='my-5'>
      <Heading1
        heading1Text={heading1Text}
        heading1='headingStyle'
      />
      <p className='pb-3 custom-para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        quaerat facere quis nobis, dignissimos consectetur.
      </p>
    </BookContainer>
  );
}

export default Book;
const BookContainer = styled.div`
  text-align: center;
  .custom-para {
    max-width: 500px;
    border-bottom: 3px solid lightgray;
    margin: auto;
  }
  .headingStyle {
    color: #3292a6;
  }
`;
