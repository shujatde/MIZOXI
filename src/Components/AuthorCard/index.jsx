/** @format */

import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

function AuthorCard({ authorTitle, authorSubTitle, path }) {
  return (
    <CustomCol
      lg={3}
      md={6}
      sm={12}>
      <Card className='authorCard'>
        <Card.Img
          variant='top'
          src={path}
          className='img-fluid rounded-circle mx-auto'
        />
        <Card.Body>
          <Card.Title>{authorTitle}</Card.Title>
          <Card.Subtitle className='cardSubTitle'>
            {authorSubTitle}
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href='#'>
            <i className='fa-brands fa-facebook-f icons'></i>
          </Card.Link>
          <Card.Link href='#'>
            <i className='fa-brands fa-twitter icons'></i>
          </Card.Link>
          <Card.Link href='#'>
            <i className='fa-brands fa-instagram icons'></i>
          </Card.Link>
        </Card.Body>
      </Card>
    </CustomCol>
  );
}

export default AuthorCard;
const CustomCol = styled(Col)`
  text-align: center;
  margin: 1rem 0;
  .authorCard {
    margin-bottom: 3rem;
    &:hover {
      background-color: #3292a6;
      color: white;
      .cardSubTitle {
        color: white;
      }
      .icons {
        color: white;
      }
    }
  }
  .cardSubTitle {
    color: grey;
    margin: 1em 0;
  }
  img {
    width: 100px;
    margin-top: -3rem;
  }
  .icons {
    color: #3292a6;
    margin: 1rem;
    font-size: 1.5rem;
  }
`;
