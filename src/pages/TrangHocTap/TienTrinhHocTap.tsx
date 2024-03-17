import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './styles.css';


const TienTrinhHocTap = () => {
    const [role, setRole] = useState<string>('none');
    const [roleError, setRoleError] = useState<string>('');
    const [school, setSchool] = useState<string>('');
    const [schoolError, setSchoolError] = useState<string>('');
    const [baocao, setBaoCao] = useState<string>('');
    const [baocaoError, setBaoCaoError] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false); // State để điều khiển việc hiển thị của bảng thông báo
    const [showOverlay, setShowOverlay] = useState(false); // State để điều khiển hiển thị màn hình khi thông báo

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setRole(value);
        validateRole(value);
      };
      const validateRole = (value: string) => {
        if (value === 'none') {
          setRoleError('Vui lòng Chọn lớp / Chọn nhóm thực tập.');
        } else {
          setRoleError('');
        }
      };
      const validateSchool = (value: string) => {
        if (!value) {
          setSchoolError('Vui lòng nhập trường đang học.');
        } else {
          setSchoolError('');
        }
      };
      const validateBaoCao = (value: string) => {
        if (!value) {
          setBaoCaoError('Vui lòng nhập báo cáo.');
        } else {
          setBaoCaoError('');
        }
      };
      const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSchool(value);
        validateSchool(value);
      };
      const handleBaoCaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setBaoCao(value);
        validateBaoCao(value);
      };
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
        <div style={{ margin: '50px 0px 0px 200px', position: 'relative',flexDirection: 'column'}}>
            <h3>Xin chào <span style={{color:'rgba(242, 109, 33, 1)'}}>NGUYỄN TẤN LỢI</span></h3>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="vaitro"><strong>Chọn lớp / Chọn nhóm thực tập</strong></Label>
              <Input type="select" name="class" id="class" value={role} onChange={handleRoleChange} style={{ width: '524px', height: '48px', padding: '10px 16px' }}>
                <option value="none">-- Chọn lớp/nhóm thực tập --</option>
                <option value="Back end">Back end</option>
                <option value="Front-end">Front-end</option>
              </Input>
              {roleError && <span style={{ color: 'red' }}>{roleError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="school"><strong>Link file</strong></Label>
              <Input type="email" name="school" id="school" value={school} onChange={handleSchoolChange} style={{ width: '524px', height: '48px', padding: '10px 16px' }} placeholder="Nhập trường đang học" />
              {schoolError && <span style={{ color: 'red' }}>{schoolError}</span>}
            </FormGroup>
            <FormGroup>
              <Label for="baocao"><strong>Nội dung báo cáo</strong></Label>
              <Input type="textarea" name="baocao" id="baocao" value={baocao} onChange={handleBaoCaoChange} style={{ width: '524px', height: '144px', padding: '10px 16px' }} />
              {baocaoError && <span style={{ color: 'red' }}>{baocaoError}</span>}
            </FormGroup>
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
                <p>Bạn đã nộp báo cáo thành công</p>
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
 
export default TienTrinhHocTap;