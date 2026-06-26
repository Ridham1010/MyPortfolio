import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              Feel Free to <strong className="purple">Connect</strong> With Me
            </h1>
            <p style={{ color: "white", fontSize: "1.2em", marginBottom: "50px" }}>
              Whether you want to discuss a project, ask a question, or just say hello, my inbox is always open.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="g-4">
          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <AiOutlineMail className="contact-icon" />
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "15px" }}>
                  Primary Email
                </Card.Title>
                <Card.Text>
                  <a href="mailto:ridhamshah1002@gmail.com" className="contact-link">
                    ridhamshah1002@gmail.com
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <FaUniversity className="contact-icon" />
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "15px" }}>
                  Institute Email
                </Card.Title>
                <Card.Text>
                  <a href="mailto:b24cs1064@iitj.ac.in" className="contact-link">
                    b24cs1064@iitj.ac.in
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <AiOutlinePhone className="contact-icon" />
                <Card.Title style={{ fontWeight: "bold", fontSize: "1.4em", marginBottom: "15px" }}>
                  Phone Number
                </Card.Title>
                <Card.Text>
                  <a href="tel:+919429646285" className="contact-link">
                    +91 9429646285
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
