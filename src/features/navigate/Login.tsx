import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  width: 50%;
`;

// @ts-ignore
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // @ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    console.log(email, password);
    onLogin(true); // Assuming onLogin updates the app's authenticated state
    navigate("/dashboard");
  };

  return (
    <>
      <Container fluid className="vh-100" style={{ minHeight: "100vh" }}>
        <Row className="justify-content-center align-items-center h-100">
          <Col lg={4}>
            <Card className="text-bg-success" style={{ borderRadius: 0 }}>
              <Card.Header as="h5">Login</Card.Header>
              <ListGroup>
                <Card.Body className="card-body text-bg-light">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                      <Button variant="success" type="submit" className="w-100">
                        Login
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
