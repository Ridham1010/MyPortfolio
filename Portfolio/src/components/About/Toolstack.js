import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import { SiGooglebard } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglebard className="tech-icon-images" style={{ fontSize: "1.6rem" }} />
        <div className="tech-icons-text">Antigravity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot className="tech-icon-images" style={{ fontSize: "1.6rem" }} />
        <div className="tech-icons-text">Claude</div>
      </Col>

      
    </Row>
  );
}

export default Toolstack;
