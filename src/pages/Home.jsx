
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Contact from '../components/Contact';
import Content from '../pages/Content';

export default function Home() {
  return (
    <div className=''>
      <Carousel>
        <Carousel.Item>
          <img
            className="img d-block w-100"
            src="https://pyeefbssdgedhifudsar.supabase.co/storage/v1/object/sign/history-dot-com/slides-images/egypt-wall.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZTI3MDhmOC1jNTZjLTRjZWUtYmYwZi1kMjQyMDdiMTlkYWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoaXN0b3J5LWRvdC1jb20vc2xpZGVzLWltYWdlcy9lZ3lwdC13YWxsLmpwZyIsImlhdCI6MTc1MzgxODY2MSwiZXhwIjoxNzg1MzU0NjYxfQ.4Jo_HUIib4jFHxEuP1L2K2CaaFqUFBfsTvtEYkOvWck"
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
            src="https://pyeefbssdgedhifudsar.supabase.co/storage/v1/object/sign/history-dot-com/slides-images/banner-history.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZTI3MDhmOC1jNTZjLTRjZWUtYmYwZi1kMjQyMDdiMTlkYWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoaXN0b3J5LWRvdC1jb20vc2xpZGVzLWltYWdlcy9iYW5uZXItaGlzdG9yeS5qcGciLCJpYXQiOjE3NTM4MTg2ODAsImV4cCI6MTc4NTM1NDY4MH0.39mX40pIxmK6dezDR2HrEjL_Fdrb8gqjYVaSP6dMKMw"
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
            src="https://pyeefbssdgedhifudsar.supabase.co/storage/v1/object/sign/history-dot-com/slides-images/african-wall.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hZTI3MDhmOC1jNTZjLTRjZWUtYmYwZi1kMjQyMDdiMTlkYWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJoaXN0b3J5LWRvdC1jb20vc2xpZGVzLWltYWdlcy9hZnJpY2FuLXdhbGwuanBnIiwiaWF0IjoxNzUzODE4NzA0LCJleHAiOjE3ODUzNTQ3MDR9.IbN1CwXxWH-aThtXYtRZ6QxaaG6xzqIpSvI5UGZ58RY"
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
