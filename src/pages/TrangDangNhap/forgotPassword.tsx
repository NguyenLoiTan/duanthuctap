import React from 'react';
import {  Row, Col, FormGroup, Label, Input, Form } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Xử lý logic xác nhận ở đây
        // Sau khi xử lý xác nhận thành công, chuyển hướng sang trang "/RegeneratePassword"
        navigate('/RegeneratePassword');
    };

    return (
        <div style={{margin:'0px 90px'}}>
            <h1 style={{ marginTop: 96, fontFamily: 'Roboto', color: "rgba(242, 109, 33, 1)" }}>Đăng nhập</h1>
            <p>Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu</p>
            <Row>
                <Col xs={12} md={6}>
                    <Form>
                        <FormGroup>
                            <Label for="email"><strong>Email</strong><span style={{ color: "rgba(255, 71, 71, 1)" }}>*</span></Label>
                            <Input type="email" name="email" id="email" style={{ width: '524px', height: '48px', padding: '10px 16px' }} />
                        </FormGroup>

                        <div>
                            <button
                                style={{
                                    width: '524px',
                                    height: '48px',
                                    padding: '10px 16px',
                                    borderRadius: '8px',
                                    backgroundColor: "rgba(242, 109, 33, 1)",
                                    color: "white",
                                    border: "none"
                                }}
                                onClick={handleLogin} // Gọi hàm handleLogin khi bấm nút xác nhận
                            >
                                Xác nhận
                            </button>
                        </div>

                        <div>
                            <Link to="/login" style={{ marginLeft: "65%", fontSize: '14px', color: "rgba(242, 109, 33, 1)" }}>Quay lại đăng nhập</Link>
                        </div>
                    </Form>
                </Col>
                <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
                    <img src="/assets/img/Join_Us.png" alt="logo" />
                </Col>
            </Row>
        </div>
    );
}

export default ForgotPassword;
