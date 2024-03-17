import { Button } from "reactstrap";

const LamBaiThi = () => {
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
                <h2 >Lập trình Back-end</h2>
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
                    >
                        <span>
                            Nộp bài
                        </span>
                    </Button>

                    
                </div>
            </div>
        </div>
     );
}
 
export default LamBaiThi;