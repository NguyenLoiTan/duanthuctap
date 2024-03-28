import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText, Row, Col, Button } from 'reactstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import PaginationButtons from './PaginationButtons';

interface CardJobGroup {
  id: string;
  nameJob: string;
  nameCompany: string;
  request: string;
  email: string;
  phone: number;
  anh: string;
}

const CardGroups: React.FC = () => {
  const downdloadIcon ='https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/IconDownload.png?alt=media&token=ffaac092-657f-4fe5-a9b0-df32771cf122'

  const [jobs, setJobs] = useState<CardJobGroup[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;
  const [showAlert, setShowAlert] = useState(false); 
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const fetchCardJobGroup = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'CardJob')); // Sử dụng db.collection
        const cardData: CardJobGroup[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          nameJob: doc.data().nameJob,
          nameCompany: doc.data().nameCompany,
          request: doc.data().request,
          email: doc.data().email,
          phone: doc.data().phone,
          anh: doc.data().anh,
        }));
        setJobs(cardData);
      } catch (error) {
        console.error('Error fetching exercise questions:', error);
      }
    };

    fetchCardJobGroup();
  }, []);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // Lấy index bắt đầu của công việc trên trang hiện tại
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSubmit = () => {
      setShowAlert(true); 
      setShowOverlay(true);
  };
  return (
    <div style={{ margin: '0px 90px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px 0px' }}>
        <h2 style={{ textAlign: 'center' }}>
          Tìm <span style={{ color: 'rgba(242, 109, 33, 1)' }}>công việc mơ ước</span> của bạn <br />tại ngôi nhà mới
        </h2>
      </div>
      <Row>
        {currentJobs.map((job, index) => (
          <Col key={index} md={4} style={{ marginTop: 25 }}>
            <Card>
              <CardBody>
                <Row >
                  <Col xs="10">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={job.anh} alt="anh" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                      <div>
                        <h4 style={{ margin: '0' }}>{job.nameJob}</h4>
                        <p style={{ margin: '0', color: '#929292' }}>{job.nameCompany}</p>
                      </div>
                    </div>
                  </Col>

                  <Col xs="1" >
                  <Button
                    style={{ backgroundColor: 'rgba(242, 109, 33, 1)', border: 'none' }}
                    onClick={handleSubmit} 
                  >
                    <img src={downdloadIcon} alt="search" />
                  </Button>
                  </Col>
                </Row>
                <Row style={{height:100}}>
                  <CardText>Yêu cầu: {job.request}</CardText>
                </Row>
                <Row style={{
                  width: '100%',
                  display: 'flex',
                  paddingTop: '5px',
                  margin: '10px 0 0 0',
                  justifyContent: 'center',
                  borderTop: '1px dashed #888',
                }}>
                  <Col span={14} style={{ borderRight: '1px solid #888', marginLeft: '10px' }}>
                <CardText><img src="/assets/img/Email.png" alt="" style={{marginRight: '5px'}}/>{job.email} </CardText>
                </Col>
                <Col span={9}>
                <CardText><img src="/assets/img/Phone.png" alt="" style={{marginRight: '5px'}}/>{job.phone}</CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        ))}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <PaginationButtons currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
      {showOverlay && <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}></div>}
      {/* Bảng thông báo */}
      {showAlert && (
            <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '85%', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', zIndex: 10000 }}>
              <div style={{ textAlign: 'center' }}>
                <embed src="/assets/img/JD FRONT END.pdf" type="application/pdf" width="100%" height="500px" />
                {/* Nút đóng */}
                <button style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: 'rgba(242, 109, 33, 1)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={() => {
                  setShowAlert(false);
                  setShowOverlay(false);
                }}>Đóng</button>
              </div>
            </div>
            )}          
    </div>
  );
};

export default CardGroups;
