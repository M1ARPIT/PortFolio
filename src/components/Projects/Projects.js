import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import port from "../../Assets/Projects/port.png";
import tictak from "../../Assets/Projects/tt.png";
import editor from "../../Assets/Projects/cleaner.png";
import chatify from "../..//Assets/Projects/chatify.PNG";
import rps from "../../Assets/Projects/rps.png";
import task from "../../Assets/Projects/ai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 - Portfolio Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Website"
              description="A responsive portfolio website built with React, featuring various effects to showcase my projects and skills. The website adapts to all screen sizes for better user experience."
              ghLink="https://github.com/your-github/portfolio"
              demoLink="https://your-portfolio-demo-link.com"
            />
          </Col>

          {/* Project 2 - Rock Paper Scissors Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rps}
              isBlog={false}
              title="Rock-Paper-Scissors Game"
              description="A fun Rock Paper Scissors game built with React. The game features multiplayer support, a stylish UI, and smooth animations, allowing users to play with friends."
              ghLink="https://github.com/M1ARPIT/RPS"
              demoLink="https://rock-pape-scissor.vercel.app/"
            />
          </Col>

          {/* Project 3 - Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatbot"
              description="A chatbot built with React that provides assistance for various tasks and answers questions. It uses conversational AI techniques to interact with users."
              ghLink="https://github.com/M1ARPIT/chatbot"
              // demoLink="https://your-demo-link.com"
            />
          </Col>

       

          {/* Project 5 - AI for Personal Tasks */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="AI for Personal Tasks"
              description="An AI developed using Python to automate simple personal tasks. It uses voice recognition to perform tasks such as opening apps or setting reminders."
              ghLink="https://github.com/M1ARPIT/jarvisproject"
              // demoLink="https://your-demo-link.com"
            />
          </Col>
             {/* Project 5 - Desktop Cleaner */}
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Desktop Cleaner"
              description="A Python script that organizes random files into respective folders based on their locations. It helps in decluttering the desktop and keeping everything well organized."
              ghLink="https://github.com/M1ARPIT/cleaner"
              // demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Project 6 - Tic-Tac-Toe Game (Java) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictak}
              isBlog={false}
              title="Tic-Tac-Toe Game (Java)"
              description="A simple two-player Tic-Tac-Toe game created using Java. Players can input coordinates to place their 'X' or 'O' on the board."
              ghLink="https://github.com/M1ARPIT/Tic-tac-toe"
              // demoLink="https://your-demo-link.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
