
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Loading from '../components/Loading';

const Content = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-tawny-mu-84.vercel.app/api/contents'); // URL atualizado
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container>
        <Row>
          <Col>
            <div>Erro: {error.message}</div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className='pt-5' id='content'>
      <h1 className='text-center pb-4'>Content</h1>
      <Row>
        {data.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Header>
                <h2>{item.title}</h2>
              </Card.Header>
              <Card.Body>
                <Image src={item.imagem} alt={item.nome} fluid />
                <p>{item.body}</p>
                <p>{item.createdAt}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Content;
