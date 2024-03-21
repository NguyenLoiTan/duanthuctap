import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText, Row, Col, Button, ButtonToolbar, ButtonGroup } from 'reactstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

interface CardJobGroup {
  id: string;
  nameJob: string;
  nameCompany: string;
  request: string;
  email: string;
  phone: number;
}

const CardGroups: React.FC = () => {
  const downdloadIcon ='https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/IconDownload.png?alt=media&token=f684c605-e3df-4f01-a913-25fa424453dd'
  const cardIcon = 'https://firebasestorage.googleapis.com/v0/b/testthuctap-d830b.appspot.com/o/CardIcon.png?alt=media&token=42f1c9c2-9139-4546-aa73-17214c1009ad'

  const [jobs, setJobs] = useState<CardJobGroup[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

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
        }));
        setJobs(cardData);
      } catch (error) {
        console.error('Error fetching exercise questions:', error);
      }
    };

    fetchCardJobGroup();
  }, []);

  // Lấy index bắt đầu của công việc trên trang hiện tại
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Chuyển đến trang kế tiếp
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Chuyển đến trang trước đó
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
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
                      <img src={cardIcon} alt="" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                      <div>
                        <h4 style={{ margin: '0' }}>{job.nameJob}</h4>
                        <p style={{ margin: '0', color: '#929292' }}>{job.nameCompany}</p>
                      </div>
                    </div>
                  </Col>

                  <Col xs="1" >
                    <Button style={{ backgroundColor: 'rgba(242, 109, 33, 1)', border: 'none' }}><img src={downdloadIcon} alt="search" /></Button>
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
                <CardText><img src="/assets/img/Email.png" alt="" style={{marginRight: '5px'}}/>gmail: {job.email} </CardText>
                </Col>
                <Col span={9}>
                <CardText><img src="/assets/img/Phone.png" alt="" style={{marginRight: '5px'}}/>Phone: {job.phone}</CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        ))}
      </Row>
      <ButtonToolbar>
      <ButtonGroup className="me-2">
        <Button color="primary" onClick={nextPage}>
          1
        </Button>
        <Button color="primary" onClick={prevPage}>
          2
        </Button>
        <Button color="primary">
          3
        </Button>
        <Button color="primary">
          4
        </Button>
      </ButtonGroup>       
      </ButtonToolbar>
  
    </div>
  );
};

export default CardGroups;
