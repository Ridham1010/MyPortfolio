import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import redisLite from "../../Assets/Projects/redis.png";
import moduGo from "../../Assets/Projects/modugo.webp";
import hackSprint from "../../Assets/Projects/hackSprint.webp";
import digitRecognition from "../../Assets/Projects/digit_recognition.png";
import alzheimersDetection from "../../Assets/Projects/alzheimers_detection.png";
import questlog from "../../Assets/Projects/questlog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redisLite}
              isBlog={false}
              title="Redis-Lite"
              description="C++ Redis clone with in-memory data store featuring a concurrent, multi-threaded architecture."
              ghLink="https://github.com/Ridham1010/Redis-Lite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moduGo}
              isBlog={false}
              title="MOD-U-GO"
              description="Developed a platform for online examination with AI proctoring. Features face tracking and eye-gaze estimation using WebGazer to detect tab switching and head movements, ensuring exam integrity."
              ghLink="https://github.com/pranav-codee/mod-u-go"
              demoLink="https://mymod-u-go.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackSprint}
              isBlog={false}
              title="HackSprint"
              description="Engineered a platform for hackathons with Git-based submissions and dynamic leaderboards. Implemented automated grading pipelines and team registration workflows."
              ghLink="https://github.com/devlup-labs/HackSprint"
              demoLink="https://hack-sprint-iitj.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitRecognition}
              isBlog={false}
              title="Handwritten Digit Recognition"
              description="C-based implementation of a 3-layered neural network to identify handwritten digits in the MNIST dataset."
              ghLink="https://github.com/Ridham1010/handwritten-digit-recognition-in-C"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alzheimersDetection}
              isBlog={false}
              title="Handwriting-Based Alzheimer's Disease Detection"
              description="A machine-learning pipeline that classifies Healthy vs Alzheimer's subjects from kinematic handwriting features, using the DARWIN dataset from the UCI Machine Learning Repository."
              ghLink="https://github.com/centauri1219/alzheimer_detection_darwin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={questlog}
              isBlog={false}
              title="QuestLog"
              description="A gamified productivity app that turns your tasks into RPG quests. Complete focus sessions to earn Fun Time Points (FTP) and XP, compete on the leaderboard, and let the browser extension keep you accountable across every tab."
              ghLink="https://github.com/Ridham1010/Team23insomnia"
              demoLink="https://team23insomnia.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
