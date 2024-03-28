import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css';

const RegisterPageSV: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false); // State để điều khiển việc hiển thị của bảng thông báo
  const [showOverlay, setShowOverlay] = useState(false); // State để điều khiển hiển thị màn hình khi thông báo

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [vitri, setVitri] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [chuyenNganh, setChuyenNganh] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [htdk, setHtdk] = useState<string>('');
  const [htth, setHtth] = useState<string>('');
  const [cty, setCty] = useState<string>('');

  const [vitriError, setVitriError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [schoolError, setSchoolError] = useState<string>('');
  const [chuyenNganhError, setChuyenNganhError] = useState<string>('');
  const [dateError, setDateError] = useState<string>('');
  const [htdkError, setHtdkError] = useState<string>('');
  const [htthError, setHtthError] = useState<string>('');
  const [ctyError, setCtyError] = useState<string>('');

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
  const handleVitriChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVitri(value);
  };
  
  const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSchool(value);
  };
  
  const handleChuyenNganhChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChuyenNganh(value);
  };
  
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDate(value);
  };
  const handleHtdkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setHtdk(value);
  };
  
  const handleHtthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setHtth(value);
  };
  
  const handleCtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCty(value);
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

    if (!vitri) {
      setVitriError('Vui lòng chọn vị trí.');
      isValid = false;
    } else {
      setVitriError('');
    }

    if (!school) {
      setSchoolError('Vui lòng nhập trường.');
      isValid = false;
    } else {
      setSchoolError('');
    }

    if (!chuyenNganh) {
      setChuyenNganhError('Vui lòng chọn chuyên ngành.');
      isValid = false;
    } else {
      setChuyenNganhError('');
    }

    if (!date) {
      setDateError('Vui lòng chọn ngày/tháng/năm sinh.');
      isValid = false;
    } else {
      setDateError('');
    }

    if (!htdk) {
      setHtdkError('Vui lòng chọn hình thức đăng ký.');
      isValid = false;
    } else {
      setHtdkError('');
    }

    if (!htth) {
      setHtthError('Vui lòng chọn hình thức thực hiện.');
      isValid = false;
    } else {
      setHtthError('');
    }

    if (!cty) {
      setCtyError('Vui lòng chọn hình thức.');
      isValid = false;
    } else {
      setCtyError('');
    }
    return isValid;
  };
  return (
    <div style={{margin:'0px 90px'}}>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng ký</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="avatar"><strong>Ảnh đại diện</strong></Label>
              <Input type="file" name="avatar" id="avatar" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>            
            <FormGroup>
              <Label for="fullname"><strong>Họ và tên</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="fullname" id="fullname" placeholder='Nhập họ và tên' onChange={handleNameChange}/>
              {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="birthdate"><strong>Ngày tháng năm sinh</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="date" name="birthdate" id="birthdate" onChange={handleDateChange}/>
              {dateError && <span style={{ color: 'red' }}>{dateError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="position"><strong>Vị trí ứng tuyển</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="position" id="position" onChange={handleVitriChange}>
                <option>Chọn vị trí</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </Input>
              {vitriError && <span style={{ color: 'red' }}>{vitriError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="email"><strong>Địa chỉ Email</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="email" name="email" id="email" placeholder='Nhập email' onChange={handleEmailChange}/>
              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="phone"><strong>Số điện thoại</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="tel" name="phone" id="phone" placeholder='Nhập số điện thoại' onChange={handlePhoneChange}/>
              {phoneError && <span style={{ color: 'red' }}>{phoneError}</span>}
            </FormGroup>
            <p style={{fontSize:13}}><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span> là những trường thông tin bắt buộc</p>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="school"><strong>Trường đang học</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="school" id="school" placeholder='Nhập trường đang học' onChange={handleSchoolChange}/>
              {schoolError && <span style={{ color: 'red' }}>{schoolError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="major"><strong>Chuyên ngành</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="major" id="major" placeholder='Nhập chuyên ngành' onChange={handleChuyenNganhChange}/>
              {chuyenNganhError && <span style={{ color: 'red' }}>{chuyenNganhError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="registerType"><strong>Hình thức đăng ký</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="registerType" id="registerType" onChange={handleHtdkChange}>
                <option>Chọn hình thức</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Input>
              {htdkError && <span style={{ color: 'red' }}>{htdkError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="executionType"><strong>Hình thức thực hiện</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="executionType" id="executionType" onChange={handleHtthChange}>
                <option>Chọn hình thức</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Input>
              {htthError && <span style={{ color: 'red' }}>{htthError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="referral"><strong>Bạn biết đến công ty từ đâu</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="referral" id="referral" onChange={handleCtyChange}>
                <option>Chọn hình thức</option>
                <option value="friend">Bạn bè</option>
                <option value="school">Nhà trường</option>
              </Input>
              {ctyError && <span style={{ color: 'red' }}>{ctyError}</span>}
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
            <p>Bạn đã nộp đơn ứng tuyển thành công.<br />Vui lòng đợi phản hồi từ công ty qua mail của bạn!</p>
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

export default RegisterPageSV;
