
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Contact from '../components/Contact';
import Content from '../pages/Content';
import Login from './Login';

export default function Home() {
  return (
    <div className=''>
      <Carousel>
        <Carousel.Item>
          <img
            className="img d-block w-100"
            src="src/img/african-wall.jpg"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img d-block w-100"
            src="src/img/banner-history.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img d-block w-100"
            src="src/img/egypt-wall.jpg"
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          <Col xs={12} className="text-center mt-5">
            <h2>Bem-vindo ao History.com!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Container>
      <Content />
      <Contact />
    </div>
  );
};
