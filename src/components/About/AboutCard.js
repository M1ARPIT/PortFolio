import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "#1e293b", border: "none" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.6", color: "#e2e8f0" }}>
            Hey there! I'm{" "}
            <span style={{ fontWeight: "bold", color: "#22d3ee" }}>Arpit Mishra</span> from{" "}
            <span style={{ fontWeight: "bold", color: "#f87171" }}>Madhya Pradesh, India.</span>
            <br />
            <br />
            <span style={{ fontWeight: "bold", color: "#facc15" }}>💻 Web Developer | Tech Enthusiast | Problem Solver</span>
            <br />
            🎓 Currently pursuing{" "}
            <span style={{ fontWeight: "bold", color: "#22d3ee" }}>B.Tech in Electronics & Communication Engineering</span>
            <br />
            🚀 Passionate about{" "}
            <span style={{ fontWeight: "bold", color: "#5eead4" }}>building scalable web applications</span> using{" "}
            <span style={{ fontWeight: "bold", color: "#67e8f9" }}>React, JavaScript</span>, and modern UI frameworks.
            <br />
            ✨ I love transforming ideas into reality through{" "}
            <span style={{ fontWeight: "bold", color: "#f472b6" }}>clean code, intuitive UI/UX</span>, and efficient performance.
            <br />
            <br />
            Apart from coding, I indulge in:
          </p>
          <ul style={{ fontSize: "1rem", marginTop: "10px", color: "#e2e8f0" }}>
            <li className="about-activity">
              <ImPointRight style={{ color: "#22d3ee", marginRight: "8px" }} />{" "}
              <span style={{ fontWeight: "bold", color: "#5eead4" }}>🎮 Gaming</span> (Competitive & Strategic)
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#22d3ee", marginRight: "8px" }} />{" "}
              <span style={{ fontWeight: "bold", color: "#67e8f9" }}>🎵 Music</span> (Exploring & Creating)
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#22d3ee", marginRight: "8px" }} />{" "}
              <span style={{ fontWeight: "bold", color: "#facc15" }}>🏏 Sports</span> (Cricket Enthusiast)
            </li>
          </ul>

          <p style={{ color: "#f472b6", fontSize: "1.2rem", fontWeight: "bold", marginTop: "15px" }}>
            🔥 “Curiosity fuels innovation. Let’s build something amazing!”
          </p>
          <footer className="blockquote-footer" style={{ marginTop: "5px", fontSize: "1rem", color: "#22d3ee" }}>
            Arpit Mishra
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;