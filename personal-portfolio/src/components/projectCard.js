import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} >
      <div className="card  mb-3 mt-5" id="Card">
        <img src={imgUrl} alt="" />
       
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}


export const ProjectCardVid = ({ title, description, imgUrl,imgVid }) => {
  return (
    <Col size={12} sm={6} md={4}  >
      <div className="  mb-3 mt-5"id="Card1">
        <img src={imgUrl} alt="" />
        <video width="410" height="380" controls>
          <source src={imgVid} type="video/mp4" />
        </video>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}