import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css';

const RegisterPageDN: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false); // State để điều khiển việc hiển thị của bảng thông báo
  const [showOverlay, setShowOverlay] = useState(false); // State để điều khiển hiển thị màn hình khi thông báo
  
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [nameQL, setNameQL] = useState<string>('');
  const [phoneQL, setPhoneQL] = useState<string>('');
  const [addressError, setAddressError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nameQLError, setNameQLError] = useState<string>('');
  const [phoneQLError, setPhoneQLError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validateForm()) {
      setShowAlert(true); 
      setShowOverlay(true);
      setTimeout(() => {
        setShowAlert(false);
        setShowOverlay(false);
      }, 10000);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };
  
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhone(value);
  };
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);
  };
  
  const handleNameQLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameQL(value);
  };
  
  const handlePhoneQLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPhoneQL(value);
  };
  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError('Vui lòng nhập email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!name) {
      setNameError('Vui lòng nhập tên doanh nghiệp.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!phone) {
      setPhoneError('Vui lòng nhập số điện thoại.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!address) {
      setAddressError('Vui lòng nhập địa chỉ.');
      isValid = false;
    } else {
      setAddressError('');
    }

    if (!nameQL) {
      setNameQLError('Vui lòng nhập tên quản lý.');
      isValid = false;
    } else {
      setNameQLError('');
    }

    if (!phoneQL) {
      setPhoneQLError('Vui lòng nhập số điện thoại quản lý.');
      isValid = false;
    } else {
      setPhoneQLError('');
    }
    return isValid;
  };

  return (
    <div style={{margin:'0px 90px'}}>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng ký</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>            
            <FormGroup>
              <Label for="email"><strong>Email liên hệ</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="email" name="email" id="email" placeholder='Nhập email' onChange={handleEmailChange}/>
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="fullname"><strong>Tên doang nghiệp</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="fullname" id="fullname" placeholder='Nhập tên doanh nghiệp' onChange={handleNameChange}/>
              {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="phone"><strong>Điện thoại công ty</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="tel" name="phone" id="phone" placeholder='Nhập số điện thoại' onChange={handlePhoneChange}/>
              {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
            </FormGroup>
            <p style={{fontSize:13}}><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span> là những trường thông tin bắt buộc</p>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address"><strong>Địa chỉ công ty</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="address" id="address" placeholder='Nhập địa chỉ công ty' onChange={handleAddressChange}/>
              {addressError && <span style={{ color: 'red' }}>{addressError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="nguoiql"><strong>Người quản lý</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="nguoiql" id="nguoiql" placeholder='Nhập tên người quản lý' onChange={handleNameQLChange}/>
              {nameQLError && <span style={{ color: 'red' }}>{nameQLError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="phone-nguoiql"><strong>Điện thoại người quản lý</strong></Label>
              <Input type="tel" name="phone-nguoiql" id="phone-nguoiql" placeholder='Nhập số điện thoại người quản lý' onChange={handlePhoneQLChange}/>
              {phoneQLError && <span style={{ color: 'red' }}>{phoneQLError}</span>}
            </FormGroup>           
          </Col>
        </Row>
        <Button
          style={{
            width: '140px',
            height: '48px',
            padding: '10px 24px',
            borderRadius: '8px',
            gap: '4px',
            backgroundColor: "rgba(242, 109, 33, 1)",
            color: "white"
          }}
          type="submit"
        >
          Gửi <img src="/assets/img/send.png" alt="send" />
        </Button>
      </Form>
      {/* Overlay */}
      {showOverlay && <div className="overlay"></div>}
          
      {/* Bảng thông báo */}
      {showAlert && (
        <div className="alert-container">
          <div className="alert">
            <h1 style={{color:"rgba(242, 109, 33, 1)"}}>Thông báo</h1>
            <p>Bạn đã đăng ký thành công.<br />Vui lòng đợi phản hồi từ công ty qua mail của bạn!</p>
            {/* Nút đóng */}
            <button onClick={() => {
              setShowAlert(false);
              setShowOverlay(false);
            }}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPageDN;
