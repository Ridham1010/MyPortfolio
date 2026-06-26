import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ridham Shah</span>{" "}
            from <span className="purple">Ahmedabad, Gujarat</span>.
            <br />
            I’m currently an undergraduate student in{" "}
            <span className="purple">IIT Jodhpur </span>
pursuing Computer Science and engineering.
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>

            <li className="about-activity">
              <ImPointRight /> Watching Football ⚽
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
