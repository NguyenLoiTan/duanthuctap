import React, { useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const RegeneratePassword: React.FC = () => {
  const imgJoninUs = 'https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/Join_Us.png?alt=media&token=c465030c-d3f1-4f7f-befc-2c6c83527aef'
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
      <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Tạo lại mật khẩu</h1>
      <Row>
        <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="password"><strong>Mật khẩu mới</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="password" name="password" id="password" placeholder='Nhập mật khẩu mới' style={{width: '524px',height: '48px',padding: '10px 16px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="newpassword"><strong>Nhập lại mật khẩu mới</strong><span style={{color:"rgba(255, 71, 71, 1)"}}>*</span></Label>
              <Input type="password" name="newpassword" id="newpassword" placeholder='Nhập lại mật khẩu mới' style={{width: '524px',height: '48px',padding: '10px 16px'}}/>
            </FormGroup>
            <Button style={{ width: '524px',height: '48px',padding: '10px 16px',borderRadius: '8px',backgroundColor: "rgba(242, 109, 33, 1)",color: "white",border:"none"}} type="submit">
              Xác nhận
            </Button>
            </Form>
            <div>
            <Link to="/login" style={{ marginLeft:"65%", fontSize: '14px',color: "rgba(242, 109, 33, 1)"}}>Quay lại đăng nhập</Link>
            </div>
        </Col>
        <Col xs={12} md={6} >
          <img src={imgJoninUs} alt="logo" />
        </Col>
      </Row>
      {/* Overlay */}
      {showOverlay && <div className="overlay"></div>}
          
      {/* Bảng thông báo */}
      {showAlert && (
        <div className="alert-container">
          <div className="alert">
            <h3 style={{color:"rgba(242, 109, 33, 1)"}}>Tạo mật khẩu thành công</h3>
            <p>Đăng nhập ngay để bắt đầu<br />nhận được các cơ hội sự nghiệp lý tưởng</p>
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
}
 
export default RegeneratePassword;