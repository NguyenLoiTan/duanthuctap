import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const MenuSV = () => {
  // Khởi tạo state để lưu trạng thái của thẻ A được chọn
  const [selectedLink, setSelectedLink] = useState('');

  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col xs={12} md={6}><img src="/assets/img/iconMenu.png" alt="iconimg" /></Col>
        <Col xs={12} md={3}>
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: selectedLink === "JD" ? "rgba(109, 109, 109, 1)" : "rgba(242, 109, 33, 1)",
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => setSelectedLink("JD")}
            >
              <img src="/assets/img/user.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Xem JD yêu cầu tuyển dụng</span>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div>
            <Link
              to="/RegisterPageSV"
              style={{
                textDecoration: "none",
                color: selectedLink === "Register" ? "rgba(109, 109, 109, 1)" : "rgba(242, 109, 33, 1)",
                display: "flex",
                alignItems: "center"
              }}
              onClick={() => setSelectedLink("Register")}
            >
              <img src="/assets/img/DangKy.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Đăng ký trực tuyến</span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MenuSV;
