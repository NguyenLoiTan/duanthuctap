import React from "react";
import { Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuLogin = () => {
  return (
    <div style={{ backgroundColor:'rgba(241, 243, 245, 1)',left: 0,bottom: 0,width: '100%' }}>
      <Row className="align-items-center">
        <Col xs={12} md={6} style={{marginTop:30}}>
          <img src="/assets/img/iconMenu.png" alt="menu" style={{margin:'0px 90px 30px 90px'}}/>
        </Col>
        <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
          <div style={{color: "rgba(242, 109, 33, 1)",fontSize:28,font:"Roboto",fontWeight:700}}>
            HỆ THỐNG TUYỂN DỤNG
            <br />
            VÀ QUẢN LÝ SINH VIÊN THỰC TẬP
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MenuLogin;
