import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/log.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{
        backgroundColor: navColour ? "#1e293b" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          {/* <img
            src={logo}
            className="img-fluid logo"
            alt="brand"
            style={{ height: "40px", marginRight: "10px" }}
          /> */}
          <span style={{ color: "#e2e8f0", fontWeight: "bold", fontSize: "1.2rem" }}>
            ArPiT
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{ borderColor: "#22d3ee" }}
        >
          <span style={{ backgroundColor: "#22d3ee" }}></span>
          <span style={{ backgroundColor: "#22d3ee" }}></span>
          <span style={{ backgroundColor: "#22d3ee" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={{ color: "#e2e8f0", fontSize: "1.1rem" }}
                className="nav-link"
              >
                <AiOutlineHome
                  style={{ marginBottom: "2px", color: "#22d3ee" }}
                />{" "}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color: "#e2e8f0", fontSize: "1.1rem" }}
                className="nav-link"
              >
                <AiOutlineUser
                  style={{ marginBottom: "2px", color: "#22d3ee" }}
                />{" "}
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ color: "#e2e8f0", fontSize: "1.1rem" }}
                className="nav-link"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", color: "#22d3ee" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={{ color: "#e2e8f0", fontSize: "1.1rem" }}
                className="nav-link"
              >
                <CgFileDocument
                  style={{ marginBottom: "2px", color: "#22d3ee" }}
                />{" "}
                Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/M1ARPIT"
                target="_blank"
                className="fork-btn-inner"
                style={{
                  backgroundColor: "#facc15",
                  borderColor: "#facc15",
                  color: "#1e293b",
                  fontWeight: "bold",
                }}
              >
                <CgGitFork style={{ fontSize: "1.2em", color: "#1e293b" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em", color: "#1e293b" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;