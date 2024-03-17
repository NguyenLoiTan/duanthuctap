import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const MenuDN = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/iconMenu.png?alt=media&token=d9ef1c46-79eb-4885-bacd-c5e13aed6733';
  const [page, setPage] = useState('');
  useEffect(() => {
  const path = window.location.pathname;

  if (path === '/JD') {
      setPage('JD');
  } else if (path === '/TrangDangKyDN') {
      setPage('Register');
  }
}, []);
  return (
    <div style={{ backgroundColor:'white',left: 0,bottom: 0,width: '100%' }}>
      <Row style={{display: 'flex', justifyContent: 'space-between'}}>
        <Col xs={12} md={6} style={{marginTop:30}}><img src={imageUrl} alt="iconimg" style={{margin:'0px 90px 30px 90px'}}/></Col>
        <Col xs={12} md={3} style={{marginTop:30}}>
          <div>
            <Link
              to="/JD"
              style={{
                textDecoration: "none",
                color: page === "JD" ? "rgba(242, 109, 33, 1)" : "rgba(109, 109, 109, 1)",
                display: "flex",
                alignItems: "center"
              }}
              
            >
              <img src="/assets/img/DNIcon.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Tìm kiếm việc làm</span>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={3} style={{marginTop:30}}>
          <div>
            <Link
              to="/TrangDangKyDN"
              style={{
                textDecoration: "none",
                color: page === "Register" ? "rgba(242, 109, 33, 1)" : "rgba(109, 109, 109, 1)",
                display: "flex",
                alignItems: "center"
              }}
             
            >
              <img src="/assets/img/IconDN.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Doanh nghiệp đăng ký</span>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MenuDN;
