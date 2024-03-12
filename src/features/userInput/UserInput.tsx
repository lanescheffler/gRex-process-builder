import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store"; // Adjust the import path as necessary
import {
  Form,
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import styled from "styled-components";
import {
  setCellType,
  setStartingCellPopulation,
  setFinalCellPopulation,
  setPopulationDoublingTime,
  setSeedingDensity,
  setRegulatoryStatus,
  setSystemType,
  selectUserInput, // Make sure you have a selector that selects the whole userInput part of the state
} from "./userInputSlice"; // Adjust path as needed

const CustomWidthButton = styled(Button)`
  width: 50%; 
  background-color: darkolivegreen;
`;


function UserInput() {

  const dispatch = useDispatch();
  const userInput = useSelector(selectUserInput);

  const handleInputChange = (action, value) => {
    dispatch(action(value));
  };

  const handleRegulatoryChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setRegulatoryStatus(e.target.value);

  const handleSystemChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setSystemType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // The userInput is already updated in Redux state, so you can use it directly for whatever needs to be done next
    console.log(userInput);
    // For example, save to server, navigate to another page, etc.
  };

  return (
    <Card>
      <Card.Header as="h5">User Input</Card.Header>
      <ListGroup>
        <Form onSubmit={handleSubmit}>
          <ListGroupItem>
            <Form.Group as={Row} controlId="formCellType">
              <Form.Label column sm={4}>
                Cell Type
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  value={userInput.cellType}
                  onChange={(e) => handleInputChange(setCellType, e.target.value)}
                >
                  {/* Populate your options here */}
                  <option value="">Select Cell Type</option>
                  <option value="TCR-T">TCR-T</option>
                  <option value="TCR-T">DD-T</option>
                  {/* <option value="CAR-T">CAR-T</option> */}
                  {/* More cell types... */}
                </Form.Control>
              </Col>
            </Form.Group>
          </ListGroupItem>

          <ListGroupItem>
            <Form.Group as={Row} controlId="formStartingCellPop">
              <Form.Label column sm={4}>
                Starting Cell Population (N)
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  value={userInput.startingCellPopulation}
                  onChange={(e) => handleInputChange(setStartingCellPopulation, e.target.value)}
                />
              </Col>
            </Form.Group>
          </ListGroupItem>

          <ListGroupItem>
            <Form.Group as={Row} controlId="formSeedingDensity">
              <Form.Label column sm={4}>
                Seeding Density (n/cm²)
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  value={userInput.seedingDensity}
                  onChange={(e) => handleInputChange(setSeedingDensity, e.target.value)}
                />
              </Col>
            </Form.Group>
          </ListGroupItem>

          <ListGroupItem>
            <Form.Group as={Row} controlId="formFinalCellPop">
              <Form.Label column sm={4}>
                Final Cell Population (n)
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  value={userInput.finalCellPopulation}
                  onChange={(e) => handleInputChange(setFinalCellPopulation, e.target.value)}
                />
              </Col>
            </Form.Group>
          </ListGroupItem>

          <ListGroupItem>
            <Form.Group as={Row} controlId="formPopDoublingTime">
              <Form.Label column sm={4}>
                Population Doubling Time (hrs)
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  value={userInput.populationDoublingTime}
                  onChange={(e) => (setPopulationDoublingTime, e.target.value)}
                />
              </Col>
            </Form.Group>
          </ListGroupItem>
          <ListGroupItem>
            <Form.Group>
              <Row>
                <Col sm={12} md={6}>
                  <Form.Label>Regulatory Status</Form.Label>
                  <div key="inline-radio" className="mb-3">
                    <Form.Check
                      inline
                      label="RUO"
                      name="regulatoryStatus"
                      type="radio"
                      id="ruo"
                      value="RUO"
                      checked={regulatoryStatus === "RUO"}
                      onChange={handleRegulatoryChange}
                    />
                    <Form.Check
                      inline
                      label="GMP"
                      name="regulatoryStatus"
                      type="radio"
                      id="gmp"
                      value="GMP"
                      checked={regulatoryStatus === "GMP"}
                      onChange={handleRegulatoryChange}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Label>System Type</Form.Label>
                  <div key="inline-radio-2" className="mb-3">
                    <Form.Check
                      inline
                      label="Open"
                      name="systemType"
                      type="radio"
                      id="open"
                      value="Open"
                      checked={systemStatus === "Open"}
                      onChange={handleSystemChange}
                    />
                    <Form.Check
                      inline
                      label="Closed"
                      name="systemType"
                      type="radio"
                      id="closed"
                      value="Closed"
                      checked={systemStatus === "Closed"}
                      onChange={handleSystemChange}
                    />
                  </div>
                </Col>
              </Row>
            </Form.Group>
          </ListGroupItem>
           <ListGroupItem>
           <div className="d-grid gap-2">
            <Button variant="success">
              Submit
            </Button>
            </div>
          </ListGroupItem>
        </Form>
      </ListGroup>
    </Card>
  );
}

export default UserInput;
