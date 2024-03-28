import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './styles.css';

const TienTrinhHocTap = () => {
    const [role, setRole] = useState<string>('none');
    const [school, setSchool] = useState<string>('');
    const [baocao, setBaoCao] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false); 
    const [showOverlay, setShowOverlay] = useState(false); 

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setRole(value);
      };
      
      const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSchool(value);
      };
      
      const handleBaoCaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setBaoCao(value);
      };
      
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

      const validateForm = () => {
        let isValid = true;
        if (role === 'none') {
          setRoleError('Vui lòng chọn lớp / chọn nhóm thực tập.');
          isValid = false;
        } else {
          setRoleError('');
        }

        if (!school) {
          setSchoolError('Vui lòng nhập trường đang học.');
          isValid = false;
        } else {
          setSchoolError('');
        }

        if (!baocao) {
          setBaoCaoError('Vui lòng nhập nội dung báo cáo.');
          isValid = false;
        } else {
          setBaoCaoError('');
        }

        return isValid;
      };

      const [roleError, setRoleError] = useState<string>('');
      const [schoolError, setSchoolError] = useState<string>('');
      const [baocaoError, setBaoCaoError] = useState<string>('');

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
              <Input type="text" name="school" id="school" value={school} onChange={handleSchoolChange} style={{ width: '524px', height: '48px', padding: '10px 16px' }} placeholder="Nhập trường đang học" />
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
