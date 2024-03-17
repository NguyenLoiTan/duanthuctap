import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css';

const RegisterPageDN: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false); // State để điều khiển việc hiển thị của bảng thông báo
  const [showOverlay, setShowOverlay] = useState(false); // State để điều khiển hiển thị màn hình khi thông báo

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAlert(true); // Hiển thị bảng thông báo khi submit form
    setShowOverlay(true);
  };
  // Đặt thời gian để tự động ẩn thông báo sau 10 giây
  setTimeout(() => {
    setShowAlert(false);
    setShowOverlay(false);
  }, 10000);

  return (
    <div style={{margin:'0px 90px'}}>
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng ký</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>            
            <FormGroup>
              <Label for="email"><strong>Email liên hệ</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="fullname"><strong>Tên doang nghiệp</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="fullname" id="fullname" />
            </FormGroup>
            <FormGroup>
              <Label for="phone"><strong>Điện thoại công ty</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="tel" name="phone" id="phone" />
            </FormGroup>
            <p style={{fontSize:13}}><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span> là những trường thông tin bắt buộc</p>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address"><strong>Địa chỉ công ty</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="address" id="address" />
            </FormGroup>
            <FormGroup>
              <Label for="nguoiql"><strong>Người quản lý</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="nguoiql" id="nguoiql" />
            </FormGroup>
            <FormGroup>
              <Label for="phone-nguoiql"><strong>Điện thoại người quản lý</strong></Label>
              <Input type="tel" name="phone-nguoiql" id="phone-nguoiql" />
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

export default RegisterPageDN;
