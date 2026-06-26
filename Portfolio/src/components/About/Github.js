import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="d-none d-md-block">
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "10px",
          color: "white",
        }}
      >
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <div style={{ width: "100%", overflowX: "auto", paddingBottom: "10px" }}>
          <div style={{ minWidth: "1000px" }}>
            <GitHubCalendar
              username="Ridham1010"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
            />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default Github;
