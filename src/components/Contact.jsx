
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className='pb-5' id='contact'>
      <Row>
        <Col xs={12} className="text-center mt-5 mb-5">
          <h2>Entre em contato conosco</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="mx-auto">
          <Form className="bg-dark p-4 rounded">
            <Form.Group controlId="nome">
              <Form.Label className="text-white">Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label className="text-white">E-mail</Form.Label>
              <Form.Control type="email" placeholder="Seu e-mail" />
            </Form.Group>
            <Form.Group controlId="telefone" className="mt-3">
              <Form.Label className="text-white">Telefone</Form.Label>
              <Form.Control type="tel" placeholder="Seu telefone" />
            </Form.Group>
            <Form.Group controlId="assunto" className="mt-3">
              <Form.Label className="text-white">Assunto</Form.Label>
              <Form.Control type="text" placeholder="Assunto da mensagem" />
            </Form.Group>
            <Form.Group controlId="descricao" className="mt-3">
              <Form.Label className="text-white">Descrição</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Sua mensagem" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
