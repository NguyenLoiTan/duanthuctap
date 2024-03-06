import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const MenuDN = () => {
  return (
    <Container style={{
      margin: 30 
    }}>
      <Row>
        <Col xs={12} md={6}><img src="/assets/img/iconMenu.png" alt="iconimg" /></Col>
        <Col xs={12} md={3}>
          <div>
            <a href="/#" style={{textDecoration:"none", color:"rgba(109, 109, 109, 1)"}}>
              <img src="/assets/img/DNIcon.png" alt="icon" />
              <span>Tìm kiếm việc làm</span>
            </a>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div>
            <a href="/#" style={{textDecoration:"none", color:"rgba(242, 109, 33, 1)"}}>
              <img src="/assets/img/IconDN.png" alt="icon" />
              <span>Doanh nghiệp đăng ký</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MenuDN;
