import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLogin from './MenuLogin';
import { Link } from 'react-router-dom';

const Login = () => {




  return (
    <Container>
      <MenuLogin/>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng nhập</h1>
      <Row>
        <Col xs={12} md={6}>
          <Form>
            <FormGroup>
              <Label for="vaitro"><strong>Vai trò</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="vaitro" id="vaitro" style={{width: '524px',height: '48px',padding: '10px 16px'}}>
                <option>-- Chọn vai trò --</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="email"><strong>Email</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="email" name="email" id="email" style={{width: '524px',height: '48px',padding: '10px 16px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="password"><strong>Mật khẩu</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="password" name="password" id="password" style={{width: '524px',height: '48px',padding: '10px 16px'}}/>
            </FormGroup>
            <div style={{ marginBottom: '24px' }}>
              <label>
                <input
                  type="checkbox"
                  
                />
                Ghi nhớ mật khẩu
              </label>
              
              <Link to="/forgotPassword" style={{ marginLeft:"45%", fontSize: '14px',color: "rgba(242, 109, 33, 1)"}}>Quên mật khẩu?</Link>
            
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label>
                <input
                  type="checkbox"
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
                  color: "white",
                  border:"none"
                }}
                
              >
                Đăng nhập
              </button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          <img src="/assets/img/Join_Us.png" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
