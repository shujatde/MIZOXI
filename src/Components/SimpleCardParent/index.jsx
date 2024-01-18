/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import SimpleCard from "../SimpleCard";
import styled from "styled-components";
import Heading1 from "../Heading1Component";

function SimpleCardParent() {
  return (
    <SimpleCardParentStyle>
      <Container>
        <Row>
          <SimpleCard
            simpleCdStyle='simpleCdStyle'
            cardTitle={
              <Heading1
                heading1='heading1'
                heading1Text='Be Better'
              />
            }
            cardText='Lorem ipsum dolor sit amet elit. Sunt provident id rerum sapiente ab velit?'
          />
          <SimpleCard
            simpleCdStyle='smarter'
            cardTitle={
              <Heading1
                heading1=''
                heading1Text='Be Smarter'
              />
            }
            cardText='Lorem ipsum dolor sit amet elit. Sunt provident id rerum sapiente ab velit?'
          />
          <SimpleCard
            simpleCdStyle='simpleCdStyle'
            cardTitle={
              <Heading1
                heading1='heading1'
                heading1Text='Be Faster'
              />
            }
            cardText='Lorem ipsum dolor sit amet elit. Sunt provident id rerum sapiente ab velit?'
          />
          <SimpleCard
            simpleCdStyle='smarter'
            cardTitle={
              <Heading1
                heading1=''
                heading1Text='Be Strong'
              />
            }
            cardText='Lorem ipsum dolor sit amet elit. Sunt provident id rerum sapiente ab velit?'
          />
        </Row>
      </Container>
    </SimpleCardParentStyle>
  );
}

export default SimpleCardParent;
const SimpleCardParentStyle = styled.div`
  margin-bottom: 1rem;
  .simpleCdStyle {
    border: 2px solid #3292a6;
  }
  .heading1 {
    color: #3292a6;
  }
  .smarter {
    color: white;
    background-color: #3292a6;
  }
`;
