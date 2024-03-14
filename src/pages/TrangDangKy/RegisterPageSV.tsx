import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Footer from '../../components/Footer';
import './styles.css';

const RegisterPageSV: React.FC = () => {
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
              <Input type="text" name="fullname" id="fullname" />
            </FormGroup>
            <FormGroup>
              <Label for="birthdate"><strong>Ngày tháng năm sinh</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="date" name="birthdate" id="birthdate" />
            </FormGroup>
            <FormGroup>
              <Label for="position"><strong>Vị trí ứng tuyển</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="position" id="position">
                <option>Chọn vị trí</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="email"><strong>Địa chỉ Email</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="phone"><strong>Số điện thoại</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="tel" name="phone" id="phone" />
            </FormGroup>
            <p style={{fontSize:13}}><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span> là những trường thông tin bắt buộc</p>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="school"><strong>Trường đang học</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="school" id="school" />
            </FormGroup>
            <FormGroup>
              <Label for="major"><strong>Chuyên ngành</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="text" name="major" id="major" />
            </FormGroup>
            <FormGroup>
              <Label for="registerType"><strong>Hình thức đăng ký</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="registerType" id="registerType">
                <option>Chọn hình thức</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="executionType"><strong>Hình thức thực hiện</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="executionType" id="executionType">
                <option>Chọn hình thức</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="referral"><strong>Bạn biết đến công ty từ đâu</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="select" name="referral" id="referral">
                <option>Chọn hình thức</option>
                <option value="friend">Bạn bè</option>
                <option value="school">Nhà trường</option>
              </Input>
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

      <Footer/>
    </div>
  );
};

export default RegisterPageSV;
