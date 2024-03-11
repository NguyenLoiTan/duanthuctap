import React from "react";
import { Col, Container, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuLogin = () => {
  return (
    <Container style={{
      marginTop: 30 
    }}>
      <Row className="align-items-center">
        <Col xs={12} md={6} >
          <img src="/assets/img/iconMenu.png" alt="menu" />
        </Col>
        <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
          <div style={{color: "rgba(242, 109, 33, 1)",fontSize:28,font:"Roboto",fontWeight:700}}>
            HỆ THỐNG TUYỂN DỤNG
            <br />
            VÀ QUẢN LÝ SINH VIÊN THỰC TẬP
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuLogin;
