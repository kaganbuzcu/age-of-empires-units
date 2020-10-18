import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TheContent, TheHeader } from '.';
import './container.scss';

const TheLayout: React.FC = () => {
  return (
    <Container className="the-layout">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <TheHeader />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <TheContent />
        </Col>
      </Row>
    </Container>
  );
};

export default TheLayout;
