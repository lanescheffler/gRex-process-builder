// src/Dashboard.js
import React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Calculations from "../calculations/Calculations";
import ConstantVariables from "../constantVariables/ConstantVariables";
import GrexInformation from "../grexInformation/GrexInformation";
import { useAuth } from "../navigate/useAuth";
import UserInput from "../userInput/UserInput";

function Dashboard() {
  //   const auth = useAuth();
  //   const navigate = useNavigate();

  //   const handleLogout = () => {
  //     auth.logout();
  //     navigate("/login");
  //   };

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          {/* Brand and toggle get grouped for better mobile display */}
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="34"
              className="d-inline-block align-top"
              alt="Logo"
              style={{ border: "1px solid #000", borderRadius: "50%" }}
            />
            {")REX Process Helper"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collect the nav links, forms, and other content for toggling */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{/* Left-aligned links */}</Nav>
            <Nav>
              {/* Right-aligned links */}
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Counter></Counter> */}

      <Container as="main">
        <Row className="mb-3">
          <Col md={7}>
            {/* Side Column for UserInput and ConstantVariables */}
            <UserInput />
          </Col>
          <Col md={5}>
            {/* Main Column for GrexInformation and Calculations */}
            <div className="mb-3">
              <ConstantVariables />
            </div>
            <div className="mb-3">
              <GrexInformation />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Calculations />
          </Col>
        </Row>
      </Container>

      <footer className="footer mt-auto py-3 bg-light">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Footer content goes here */}
          <div className="text-muted">Happy G-Rexing!</div>
          <div className="text-muted">G-Rex® 2024</div>
          <div className="text-muted">Linky Link</div>
        </Container>
      </footer>
    </>
  );
}

export default Dashboard;
