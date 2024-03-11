import { Container, Row } from "reactstrap"

const Footer = () => {
    return (
      <Container>
        <Row>
        <div
        style={{
          margin: 30,
          background: 'rgba(255, 255, 255, 1)',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Alta Software - Training Team - 04/2023
      </div>
        </Row>
        
      </Container>
      
    );
  };
  
  export default Footer;