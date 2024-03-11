import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const CardGroups: React.FC = () => {
  return (
    <Container>
    <Row>
      {[...Array(9)].map((_, index) => (
        <Col key={index} md={4} style={{marginTop:25}}>
          <Card>
            <CardBody>
              <CardTitle>Card {index + 1}</CardTitle>
              <CardText>This is some sample text for Card {index + 1}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default CardGroups;
