import { useState } from "react";
import { Button } from "reactstrap";

const LamBaiThi = () => {
    const [showAlert, setShowAlert] = useState(false); // State để điều khiển việc hiển thị của bảng thông báo
    const [showOverlay, setShowOverlay] = useState(false); // State để điều khiển hiển thị màn hình khi thông báo

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        <div style={{
            margin: '0 200px',
            position: 'relative',
        }}>
            <div style={{
                display: 'flex',
                marginTop: '40px',
                alignItems: 'start', 
                flexDirection: 'column',
            }}>
                <h5 >Đề thi môn</h5>
                <h2 >Lập trình Front end</h2>
            </div>

            <div style={{
                width: '100%',
                height: '50px',
                display: 'flex',
                borderRadius: '10px',
                backgroundColor: 'white',
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    margin: '0 10px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <div>
                        Tổng câu hỏi:
                        <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                            20
                        </span>
                    </div>
                    <div>
                        Hoàn thành:
                        <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                            2/20
                        </span>
                    </div>
                    <div>
                        <i><img src="/assets/img/Clock.png" alt="" /></i>
                        <span style={{marginLeft: '10px', color: '#F26D21', fontWeight: 'bold'}}>
                        00:05:00
                        </span>
                    </div>
                    <Button
                        style={{
                            color: 'white',
                            width: '100px',
                            height: '40px',
                            fontSize: '16px',
                            marginLeft: '-20px',
                            backgroundColor: '#F26D21',
                        }}
                        onClick={handleSubmit}
                    >
                        <span>
                            Nộp bài
                        </span>
                    </Button>
                        {/* Overlay */}
            {showOverlay && <div className="overlay"></div>}
          
          {/* Bảng thông báo */}
          {showAlert && (
          <div className="alert-container">
            <div className="alert">
              <h1 style={{color:"rgba(242, 109, 33, 1)"}}>Thông báo</h1>
              <p>Bạn có chắc là muốn nộp bài?</p>
              {/* Nút đóng */}
              <button style={{backgroundColor:'rgba(240, 240, 240, 1)',color:'black',marginRight:'10px'}} onClick={() => {
                setShowAlert(false);
                setShowOverlay(false);
              }}>Đóng</button>
              <button onClick={() => {
                setShowAlert(false);
                setShowOverlay(false);
              }}>Xác nhận</button>
            </div>
          </div>
          )}
                    
                </div>
            </div>
        </div>
     );
}
 
export default LamBaiThi;