
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../img/photo_perso.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
 

  

 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`Hi! I'm Charly Ken`} </h1>
                <h3>{'Data Engineering Student'}</h3>
                  <p>Motivated and inquisitive, highly proficient in Python and SQL for machine learning and predictive model development projects.</p>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
           
                  <img src={headerImg} alt="Header Img"/>
              
          </Col>
        </Row>
      </Container>
    </section>
  )
}