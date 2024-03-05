import React, { useState } from 'react';
import { Container, Row, Col, Form } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLogin from './MenuLogin';

const Login = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [isHuman, setIsHuman] = useState(false);

  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    console.log('Role:', role);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Password:', rememberPassword);
    console.log('Is Human:', isHuman);
  };

  return (
    <Container>
      <MenuLogin/>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng nhập</h1>
      <Row>
        <Col xs={12} md={6}>
          <Form>
            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="role" style={{ display: "block", marginBottom:12 }}>Vai trò<span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></label>
              <select
                style={{
                  width: '524px',
                  height: '48px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                }}
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">-- Chọn vai trò --</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="email" style={{ display: "block", marginBottom:12 }}>Email<span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></label>
              <input
                style={{
                  width: '524px',
                  height: '48px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                }}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="password" style={{ display: "block", marginBottom:12 }}>Mật khẩu<span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></label>
              <input
                style={{
                  width: '524px',
                  height: '48px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                }}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={rememberPassword}
                  onChange={(e) => setRememberPassword(e.target.checked)}
                />
                Ghi nhớ mật khẩu
              </label>
              
              <a href="/forgot-password" style={{ marginLeft:"45%", fontSize: '14px',color: "rgba(242, 109, 33, 1)"}}>Quên mật khẩu?</a>
            
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label>
                <input
                  type="checkbox"
                  checked={isHuman}
                  onChange={(e) => setIsHuman(e.target.checked)}
                />
                Tôi không phải người máy
              </label>
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
                onClick={handleLogin}
              >
                Đăng nhập
              </button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
          <img src="/assets/img/Join_Us.png" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
