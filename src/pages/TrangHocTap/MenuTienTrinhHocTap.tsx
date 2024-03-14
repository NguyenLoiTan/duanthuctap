import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

const MenuTienTrinhHocTap = () => {
  const [page, setPage] = useState('');
useEffect(() => {
  const path = window.location.pathname;

  if (path === '/MenuThi') {
      setPage('Thi trac nghiem');
  } else if (path === '/MenuTienTrinhHocTap') {
      setPage('Tien trinh hoc tap');
  }
}, []);

  return (
    <div style={{ backgroundColor:'white',left: 0,bottom: 0,width: '100%' }}>
      <Row style={{display: 'flex', justifyContent: 'space-between'}}>
        <Col xs={12} md={6} style={{marginTop:30}}><img src="/assets/img/iconMenu.png" alt="iconimg" style={{marginLeft:90}}/></Col>
        <Col xs={12} md={2} style={{marginTop:30}}>
          <div>
            <Link
              to="/MenuThi"
              style={{
                textDecoration: "none",
                color: page === "Thi trac nghiem" ? "rgba(242, 109, 33, 1)" : "rgba(109, 109, 109, 1)",
                display: "flex",
                alignItems: "center"
              }}
              
            >
              <img src="/assets/img/user.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Thi trắc nghiệm</span>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={2} style={{marginTop:30}}>
          <div>
            <Link
              to="/MenuTienTrinhHocTap"
              style={{
                textDecoration: "none",
                color: page === "Tien trinh hoc tap" ? "rgba(242, 109, 33, 1)" : "rgba(109, 109, 109, 1)",
                display: "flex",
                alignItems: "center"
              }}
             
            >
              <img src="/assets/img/Book.png" alt="icon" />
              <span style={{ marginLeft: 5 }}>Tiến trình học tập</span>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={2} style={{marginTop:30}}>
          <Button></Button>
        </Col>
      </Row>
    </div>
  );
}

export default MenuTienTrinhHocTap;
