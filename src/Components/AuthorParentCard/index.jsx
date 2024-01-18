/** @format */

import React from "react";
import AuthorCard from "../AuthorCard";
import { Container, Row } from "react-bootstrap";

function AuthorParentCard() {
  return (
    <div>
      <Container>
        <Row>
          <AuthorCard
            authorTitle='Susan Williams'
            authorSubTitle='Lead Writer'
            path='/img/person1.jpg'
          />
          <AuthorCard
            authorTitle='Grace Smith'
            authorSubTitle='Co Writer'
            path='/img/person2.jpg'
          />
          <AuthorCard
            authorTitle='John Doe'
            authorSubTitle='Editor'
            path='/img/person3.jpg'
          />
          <AuthorCard
            authorTitle='Kenin Swansons'
            authorSubTitle='Designer'
            path='/img/person4.jpg'
          />
        </Row>
      </Container>
    </div>
  );
}

export default AuthorParentCard;
