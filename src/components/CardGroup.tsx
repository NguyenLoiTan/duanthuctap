import React from 'react';
import { Card, CardBody,  CardText, Row, Col, Button } from 'reactstrap';

const CardGroups: React.FC = () => {
  return (
    <div style={{margin:'0px 90px'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'50px 0px' }}>
        <h2 style={{ textAlign: 'center' }}>
            Tìm <span style={{ color: 'rgba(242, 109, 33, 1)' }}>công việc mơ ước</span> của bạn <br />tại ngôi nhà mới
        </h2>
      </div>
    <Row>
      {[...Array(9)].map((_, index) => (
        <Col key={index} md={4} style={{marginTop:25}}>
          <Card>
            <CardBody>
              <Row >
                <Col xs="10">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/assets/img/CardIcon.png" alt="" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <div>
                      <h4 style={{ margin: '0' }}>
                          {/* Thiết kế UI/UX (Figma) */}
                          Card {index + 1}
                      </h4>
                      <p style={{ margin: '0', color: '#929292' }}>
                          {/* Alta Software */}
                          Alta Software
                      </p>
                  </div>
                  </div>
                </Col>

                <Col xs="1" >
                  <Button style={{backgroundColor:'rgba(242, 109, 33, 1)',border: 'none'}}><img src="/assets/img/IconDownload.png" alt="search" /></Button>
                </Col>
              </Row>
              <Row>
                <CardText>Yêu cầu: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ {index + 1}</CardText>
              </Row>
              <Row style={{
                width: '100%',
                display: 'flex',
                paddingTop: '5px',
                margin: '10px 0 0 0',
                justifyContent: 'center',
                borderTop: '1px dashed #888',
            }}>
                <Col span={14} style={{  borderRight: '1px solid #888', marginLeft: '10px'}}>
                <CardText><img src="/assets/img/Email.png" alt="" style={{marginRight: '5px'}}/>gmail </CardText>
                </Col>
                <Col span={9}>
                <CardText><img src="/assets/img/Phone.png" alt="" style={{marginRight: '5px'}}/>Phone </CardText>
                </Col>
              </Row>
              
              
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default CardGroups;
