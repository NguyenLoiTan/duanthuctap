import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const imgJoninUs = 'https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/Join_Us.png?alt=media&token=c465030c-d3f1-4f7f-befc-2c6c83527aef'
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [role, setRole] = useState<string>('none');
  const [roleError, setRoleError] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Vui lòng nhập email.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    validatePassword(value);
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('Vui lòng nhập mật khẩu.');
    } else {
      setPasswordError('');
    }
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRole(value);
    validateRole(value);
  };
  
  

  const validateRole = (value: string) => {
    if (value === 'none') {
      setRoleError('Vui lòng chọn vai trò.');
    } else {
      setRoleError('');
    }
  };

  const handleVerification = () => {
    setIsVerified(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateEmail(email);
    validatePassword(password);
    validateRole(role);

    if (!emailError && !passwordError && !roleError && isVerified) {
      if (email !== "abc@gmail.com") {
        setEmailError('Email không hợp lệ.');
      } else if (password !== "12345") {
        setPasswordError('Sai mật khẩu.');
      } else {
        // Kiểm tra role và chuyển hướng đến trang tương ứng
        if (role === "Doanh nghiệp") {
          navigate("/JD");
        } else if (role === "Sinh viên") {
          navigate("/TrangTaoDeThi");
        }
      }
    }
  };

  return (
    <div style={{ margin: '0px 90px' }}>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng nhập</h1>
      <Row>
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="vaitro"><strong>Vai trò</strong><span style={{ color: "rgba(255, 71, 71, 1)" }}>*</span></Label>
              <Input type="select" name="vaitro" id="vaitro" value={role} onChange={handleRoleChange} style={{ width: '524px', height: '48px', padding: '10px 16px' }}>
                <option value="none">-- Chọn vai trò --</option>
                <option value="Doanh nghiệp">Doanh nghiệp</option>
                <option value="Sinh viên">Sinh viên</option>
              </Input>
              {roleError && <span style={{ color: 'red' }}>{roleError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="email"><strong>Email</strong><span style={{ color: "rgba(255, 71, 71, 1)" }}>*</span></Label>
              <Input type="email" name="email" id="email" value={email} placeholder='Tên đăng nhập' onChange={handleEmailChange} style={{ width: '524px', height: '48px', padding: '10px 16px' }} />
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="password"><strong>Mật khẩu</strong><span style={{ color: "rgba(255, 71, 71, 1)" }}>*</span></Label>
              <Input type="password" name="password" id="password" value={password} placeholder='Nhập mật khẩu' onChange={handlePasswordChange} style={{ width: '524px', height: '48px', padding: '10px 16px' }} />
              {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
            </FormGroup>
            <FormGroup>
              <Input type="checkbox" name="password" id="password"/>
              <Label for='checkbox'>Ghi nhớ mật khẩu</Label>
              <Link to="/forgotPassword" style={{ marginLeft: "45%", fontSize: '14px', color: "rgba(242, 109, 33, 1)" }}>Quên mật khẩu?</Link>
            </FormGroup>
            <FormGroup>
              <ReCAPTCHA
                sitekey="6LfLVJspAAAAADaK4CrW5n9or0lUl7n1ljZJau9W"
                onChange={handleVerification}
              />
              {!isVerified && <span style={{ color: 'red' }}>Vui lòng xác nhận bạn không phải là robot.</span>}
            </FormGroup>
            <div>
              <button
                type="submit"
                style={{
                  width: '524px',
                  height: '48px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: "rgba(242, 109, 33, 1)",
                  color: "white",
                  border: "none"
                }}
              >
                Đăng nhập
              </button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          <img src={imgJoninUs} alt="logo" />
        </Col>
      </Row>
    </div>
  );
};

export default Login;
