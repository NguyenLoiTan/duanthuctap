import React from 'react';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLogin from './MenuLogin';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return ( 
        <Container>
      <MenuLogin/>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng nhập</h1>
      <p>Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu</p>
      <Row>
        <Col xs={12} md={6}>
        <div style={{ marginBottom: '24px' }}>
              <label htmlFor="email" style={{ display: "block", marginBottom:12 }}>Email</label>
              <input
                style={{
                  width: '524px',
                  height: '48px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                }}
                type="email"
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                style={{
                  width: '524px',
                  height: '48px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: "rgba(242, 109, 33, 1)",
                  color: "white"

                }}
                // onClick={handleLogin}
              >
                Đăng nhập
              </button>
            </div>

            <div>
            <Link to="/login" style={{ marginLeft:"65%", fontSize: '14px',color: "rgba(242, 109, 33, 1)"}}>Quay lại đăng nhập</Link>
            </div>
        </Col>
        <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
          <img src="/assets/img/Join_Us.png" alt="logo" />
        </Col>
      </Row>
    </Container>
     );
}
 
export default ForgotPassword;