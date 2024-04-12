import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import { ProjectCardVid } from "./projectCard";
import projImg1 from "../img/Capture d’écran du 2024-02-03 22-41-23.png";
import projImg2 from "../img/Capture d’écran du 2024-03-26 17-18-22.png";
import projImg3 from "../img/Capture d’écran du 2024-03-29 22-43-44.png";
import projImg4 from "../img/Capture d’écran du 2024-04-06 02-18-09.png";
import projImg5 from "../img/WhatsApp Image 2024-04-07 at 19.47.50.jpeg";
import projImg6 from "../img/rfid.png";
import projVid from "../img/video_1.mp4";
import colorSharp2 from "../img/photo_perso.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Board games website",
      description: "HTML, CSS, PHP, MySQL, Bootstrap, Git",
      imgUrl: projImg1,
    },
    {
      title: "Car Price Prediction Web app",
      description: "Machine Learning, Python, Streamlit",
      imgUrl: projImg2,
    },
    {
      title: "API exposing video game console sales data + Web app Client",
      description: "C#, Git, ASP.Net, Microsoft Azure, Postman",
      imgUrl: projImg3,
    },

    {
      title: "Prediction of an individual's income range based on demographic characteristics",
      description: "Python, Machine learning(Naive Bayes, Logistic Regression, Random Forest, Decision Tree)",
      imgUrl: projImg4,
    },

    {
      title: "HR Dashboard",
      description: "Power BI",
      imgUrl: projImg5,
    },

    {
      title: "RFID Tags Detection",
      description: "Python, Machine learning, API",
      imgUrl: projImg6,
    },
   
   
  ];

  const projects_vid = [
    {
      title: "Concours « Road Platooning »",
      description: "Language C",
      imgVid: projVid,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                               
                            )
                          })
                        }
                        {projects_vid.map((project, index) => (
                <ProjectCardVid key={index} {...project} />
              ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <Container>
        <Row>
          <Col size={12}>
            
            <Row>
              
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}