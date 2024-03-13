import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import UserInput from "./features/userInput/UserInput";
import ConstantVariables from "./features/constantVariables/ConstantVariables";
import GrexInformation from "./features/grexInformation/GrexInformation";
import Calculations from "./features/calculations/Calculations";
import { Counter } from "./features/counter/Counter";

function App() {
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
             {')REX Process Helper'}
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
          <Col md={8}>
            {/* Side Column for UserInput and ConstantVariables */}
            <UserInput />
          </Col>
          <Col md={4}>
            {/* Main Column for GrexInformation and Calculations */}
            <div className="mb-3">
              <ConstantVariables />
            </div>
            <div className="mb-3">
              <GrexInformation
                startingSeries={100}
                finalSeries={100}
                passageRequired={true}
                rep2Exists={true}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Calculations
            />
          </Col>
        </Row>
      </Container>

      <footer className="footer mt-auto py-3 bg-light">
        <Container  className="d-flex justify-content-between align-items-center" >
          {/* Footer content goes here */}
          <div className="text-muted">Happy G-Rexing!</div>
          <div className="text-muted">G-Rex® 2024</div>
          <div className="text-muted">Linky Link</div>
        </Container>
      </footer>
    </>
  );
}

export default App;
