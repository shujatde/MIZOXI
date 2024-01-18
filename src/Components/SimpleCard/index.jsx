/** @format */

import React from "react";
import { Col, Card } from "react-bootstrap";

function SimpleCard({ cardText, cardTitle, simpleCdStyle }) {
  return (
    <Col
      lg={3}
      md={6}
      sm={12}
      className='mt-5 pt-3'>
      <Card className={`${simpleCdStyle}`}>
        <Card.Body className='text-center'>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SimpleCard;
