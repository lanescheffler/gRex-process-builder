import React from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCalculations } from "../calculations/calculationsSlice"; // Adjust the path as needed
import {
  determineGRexSeries,
  calculateSeriesQuantity,
  isPassageNecessary,
} from "./utils/utils";

const StyledCardBody = styled(Card.Body)`
  background-color: #abe7c0;
`

function GrexInformation() {
  const calculations = useSelector(selectCalculations);
  const theoreticalStartingSurfaceArea =
    calculations.theoreticalStartingSurfaceArea;
  const theoreticalFinalSurfaceArea = calculations.theoreticalFinalSurfaceArea;

  const startingSeries = determineGRexSeries(theoreticalStartingSurfaceArea);
  const startingSeriesQuantity = calculateSeriesQuantity(
    startingSeries,
    theoreticalStartingSurfaceArea
  );

  const finalSeries = determineGRexSeries(theoreticalFinalSurfaceArea);
  const finalSeriesQuantity = calculateSeriesQuantity(
    finalSeries,
    theoreticalFinalSurfaceArea
  );

  // Assuming passageRequired and rep2Exists are also part of your calculations state or another state,
  // fetch them using useSelector or pass them as props as necessary.
  // For demonstration, I'll assume they're static.
  const passageRequired = isPassageNecessary(
    startingSeries,
    startingSeriesQuantity,
    finalSeries,
    finalSeriesQuantity
  ); // Placeholder
  // const rep2Exists = true; // Placeholder

  return (
    <Card style={{ borderRadius: 0 }} className="card text-bg-success">
      <Card.Header as="h5">G-REX Information</Card.Header>
      <ListGroup variant="flush">
        <StyledCardBody>
          {/* Starting G-REX Series */}
          <ListGroupItem>
            <Row className="align-items-center">
              <Col xs={6} md={8}>
                Starting G-REX Series (cm²): {startingSeries}{" "}
              </Col>
              <Col xs={6} md={4} className="text-end">
                QUANTITY: {startingSeriesQuantity}
              </Col>
            </Row>
          </ListGroupItem>
          {/* Final G-REX Series */}
          <ListGroupItem>
            <Row className="align-items-center">
              <Col xs={6} md={8}>
                Final G-REX Series (cm²): {finalSeries}
              </Col>
              <Col xs={6} md={4} className="text-end">
                QUANTITY: {finalSeriesQuantity}
              </Col>
            </Row>
          </ListGroupItem>
          {/* Is passage necessary */}
          <ListGroupItem>
            <Row className="align-items-center">
              <Col xs={6} md={8}>
                Is passage necessary:{" "}
              </Col>
              <Col xs={6} md={4} className="text-end">
                {passageRequired ? "Yes" : "No"}
              </Col>
            </Row>
          </ListGroupItem>
          {/* Does REP2 Exist */}
          <ListGroupItem>
            <Row className="align-items-center">
              <Col xs={6} md={8}>
                Does REP2 Exist:{" "}
              </Col>
              <Col xs={6} md={4} className="text-end">
                {passageRequired ? "Yes" : "No"}
              </Col>
            </Row>
          </ListGroupItem>
        </StyledCardBody>
      </ListGroup>
    </Card>
  );
}

export default GrexInformation;
