/** @format */

import React from "react";
import { Accordion, Container } from "react-bootstrap";
import styled from "styled-components";
function AccordionComponent() {
  return (
    <div>
      <Container>
        <CustomAccordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <i class='fa-solid fa-circle-arrow-down '></i> Get Inspired
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis eaque ab voluptatum adipisci. Eaque laboriosam similique
              natus in saepe adipisci, nisi molestiae, exercitationem nulla
              ducimus laborum nostrum numquam dolores consequuntur explicabo
              dicta id. Beatae incidunt natus eos possimus, pariatur facilis id?
              Nostrum sint alias quis reiciendis est eveniet deserunt
              consequatur cupiditate quibusdam excepturi! Consequatur maiores
              porro voluptatibus temporibus fuga totam ad neque dolore, eveniet
              vitae consequuntur odio libero iste, nihil
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              <i class='fa-solid fa-circle-arrow-down'></i> Get The Knowledge
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis eaque ab voluptatum adipisci. Eaque laboriosam similique
              natus in saepe adipisci, nisi molestiae, exercitationem nulla
              ducimus laborum nostrum numquam dolores consequuntur explicabo
              dicta id. Beatae incidunt natus eos possimus, pariatur facilis id?
              Nostrum sint alias quis reiciendis est eveniet deserunt
              consequatur cupiditate quibusdam excepturi! Consequatur maiores
              porro voluptatibus temporibus fuga totam ad neque dolore, eveniet
              vitae consequuntur odio libero iste, nihil
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              <i class='fa-solid fa-circle-arrow-down'></i> Get Inspired
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur tenetur, aspernatur, explicabo dolore quam eligendi
              ullam accusantium autem sequi cupiditate dolores dicta magnam!
              Cupiditate voluptate, incidunt quis, consequuntur, voluptates ex
              alias debitis eius voluptatem facilis assumenda qui eos
              reprehenderit minus facere. Assumenda rem numquam sint optio
              doloremque sunt ipsam delectus amet suscipit. Exercitationem
              perferendis dolorem porro velit corporis beatae, quod nihil quos
              sint accusamus adipisci placeat sequi facilis quisquam magni
              reprehenderit.
            </Accordion.Body>
          </Accordion.Item>
        </CustomAccordion>
      </Container>
    </div>
  );
}

export default AccordionComponent;
const CustomAccordion = styled(Accordion)`
  .accordion-button {
    font-size: 1.25rem;
    text-align: center;
    display: block;
  }
`;
