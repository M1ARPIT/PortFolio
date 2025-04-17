import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/lay.png";
import Particle from "../Particle";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: "#1e293b", position: "relative" }}>
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#e2e8f0" }}>
              LET ME <span style={{ color: "#22d3ee" }}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: "1.6" }}>
              <br />
              I am proficient in programming languages like
              <b style={{ color: "#facc15" }}> Java, JavaScript, and Python.</b>
              <br />
              <br />
              My areas of interest include
              <b style={{ color: "#5eead4" }}> Web Technologies, UI/UX Designing,</b> and
              <b style={{ color: "#5eead4" }}> immersive 3D experiences</b>, particularly in
              <b style={{ color: "#5eead4" }}> Metaverse development.</b>
              <br />
              <br />
              I enjoy building dynamic and scalable applications using
              <b style={{ color: "#67e8f9" }}> Node.js</b> and modern JavaScript frameworks like
              <b style={{ color: "#f472b6" }}> React.js and Three.js</b> to create innovative and visually stunning digital experiences.
            </p>
          </Col>

          <Col md={4} style={{ paddingBottom: 10 }}>
            <Tilt>
              <img
                src={homeLogo}
                className="avatar-container"
                alt="avatar"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  borderRadius: "10px",
                  border: "2px solid #22d3ee",
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ color: "#e2e8f0" }}>FIND ME ON</h1>
            <p style={{ color: "#e2e8f0" }}>
              Feel free to <span style={{ color: "#22d3ee" }}>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/M1ARPIT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "#e2e8f0" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arpit-mishra-315737227"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "#e2e8f0" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                 
                 href="https://mail.google.com/mail/?view=cm&fs=1&to=arpitmishra.tech@gmail.com"

                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "#e2e8f0" }}
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
