import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

const MenuThi = () => {
  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/iconMenu.png?alt=media&token=d9ef1c46-79eb-4885-bacd-c5e13aed6733';
  const avatar = 'https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/avatar.png?alt=media&token=9cdfd548-59df-460a-aabb-455f027bb788'
  const [page, setPage] = useState('');
  useEffect(() => {
    const path = window.location.pathname;

    if (path === '/TrangTaoDeThi') {
      setPage('Thi trac nghiem');
    } else if (path === '/TrangTienTrinhHocTap') {
      setPage('Tien trinh hoc tap');
    }
  }, []);

  return (
    <div style={{ backgroundColor:'white',left: 0,bottom: 0,width: '100%' }}>
      <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Col xs={12} md={6} style={{ marginTop: 30 }}>
          <img src={imageUrl} alt="iconimg" style={{ margin: '0px 90px 30px 90px' }} />
        </Col>
        <Col xs={12} md={2} style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link
              to="/TrangTaoDeThi"
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
        <Col xs={12} md={2} style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link
              to="/TrangTienTrinhHocTap"
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
        <Col xs={12} md={2} style={{ marginBottom: 30, display: 'flex', alignItems: 'center' }}>
          <Button style={{
            width: '140px',
            height: '48px',
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            gap: '4px',
            backgroundColor: "rgba(242, 109, 33, 1)",
            color: "white"
          }}>
            <img src={avatar} alt="avatar" style={{ width: '24px', height: '24px', marginRight: '4px' }} /> Tấn Lợi
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default MenuThi;
