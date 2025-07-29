
import React from 'react';

import logo from 'public/history-icon.svg';
import './Header.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" id='home'>
      <Container fluid>
        <Navbar.Brand href="#" className='logo d-flex'>
          <img className='' src={logo} alt="" />
          <h4>History.com</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#content">Content</Nav.Link>
            <Nav.Link href="#quiz">Quiz</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex me-3">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <div className="user d-flex align-items-center">
            <Button variant="outline-light" className="me-2">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
