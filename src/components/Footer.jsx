
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5>Sobre Nós</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contato
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Contato</h5>
            <p>
              <i className="fas fa-envelope"></i> exemplo@email.com
            </p>
            <p>
              <i className="fas fa-phone"></i> (11) 12345-6789
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
