import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const MenuSV = () => {
  const [page, setPage] = useState('');
useEffect(() => {
  const path = window.location.pathname;

  if (path === '/') {
      setPage('JD');
  } else if (path === '/RegisterPageSV') {
      setPage('Register');
  }
}, []);

  return (
    <div style={{ backgroundColor:'rgba(241, 243, 245, 1)',left: 0,bottom: 0,width: '100%' }}>
      <Row style={{display: 'flex', justifyContent: 'space-between'}}>
        <Col xs={12} md={6} style={{marginTop:30}}><img src="/assets/img/iconMenu.png" alt="iconimg" style={{margin:'0px 90px 30px 90px'}}/></Col>
        <Col xs={12} md={3} style={{marginTop:30}}>
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: page === "JD" ? "rgba(242, 109, 33, 1)" : "rgba(109, 109, 109, 1)",
                display: "flex",
                alignItems: "center"
              }}
              
            >
              <img src="/assets/img/user.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Xem JD yêu cầu tuyển dụng</span>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={3} style={{marginTop:30}}>
          <div>
            <Link
              to="/RegisterPageSV"
              style={{
                textDecoration: "none",
                color: page === "Register" ? "rgba(242, 109, 33, 1)" : "rgba(109, 109, 109, 1)",
                display: "flex",
                alignItems: "center"
              }}
             
            >
              <img src="/assets/img/DangKy.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Đăng ký trực tuyến</span>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MenuSV;
