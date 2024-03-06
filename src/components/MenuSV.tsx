import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const MenuSV = () => {
  return (
    <Container style={{
      marginTop: 30 
    }}>
      <Row>
        <Col xs={12} md={6}><img src="/assets/img/iconMenu.png" alt="iconimg" /></Col>
        <Col xs={12} md={3}>
          <div>
            <a href="/#" style={{textDecoration:"none", color:"rgba(242, 109, 33, 1)"}}>
              <img src="/assets/img/user.png" alt="icon" />
              <span style={{marginLeft:5}}>Xem JD yêu cầu tuyển dụng</span>
            </a>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div>
            <a href="/#" style={{textDecoration:"none", color:"rgba(109, 109, 109, 1)"}}>
              <img src="/assets/img/DangKy.png" alt="icon" />
              <span style={{marginLeft:5}}>Đăng ký trực tuyến</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
}

export default MenuSV;
