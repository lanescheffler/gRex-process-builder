import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUserInput } from '../userInput/userInputSlice';


function Calculations() {

  const {
    startingCellPopulation,
    finalCellPopulation,
    populationDoublingTime,
    seedingDensity,
    // ... add other necessary state variables
  } = useSelector(selectUserInput);

  const maxCellDensity = 40000000
 
  const rep2SeedingDensity = 500000

  // Calculations
  const theoreticalStartingSurfaceArea = startingCellPopulation / seedingDensity;
  const actualStartingSurfaceArea = theoreticalStartingSurfaceArea; // Simplified for this example
  const theoreticalFinalSurfaceArea = finalCellPopulation / maxCellDensity;
  const actualFinalSurfaceArea = theoreticalFinalSurfaceArea; // Simplified for this example
  const numberOfCellsToSeedRep2 = rep2SeedingDensity * actualFinalSurfaceArea; // Simplification
  const harvestPassageDensity = numberOfCellsToSeedRep2 / actualStartingSurfaceArea;
  const numberOfPopulationDoublingsForRep1 = Math.sqrt(harvestPassageDensity / seedingDensity);
  const populationDoublingTimeDays = populationDoublingTime / 24;
  const rep1DurationDays = numberOfPopulationDoublingsForRep1 * populationDoublingTimeDays;
  const numberOfPopulationDoublingsForRep2 = Math.sqrt(maxCellDensity / seedingDensity);
  const rep2DurationDays = numberOfPopulationDoublingsForRep2 * populationDoublingTimeDays;
  const totalProcessTime = rep1DurationDays + rep2DurationDays; // Simplified, not including additional time
  const mediaVolumeConsumed = (theoreticalFinalSurfaceArea + theoreticalStartingSurfaceArea) * 10 / 1000;

  // Return a div with the calculations for demonstration purposes
  return (
    <Card>
      <Card.Header as="h5">Calculations</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>Theoretical Starting Surface Area: {theoreticalStartingSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Actual Starting Surface Area: {actualStartingSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Theoretical Final Surface Area: {theoreticalFinalSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Actual Final Surface Area: {actualFinalSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Number of Cells to Seed REP2: {numberOfCellsToSeedRep2}</ListGroup.Item>
              <ListGroup.Item>Harvest/Passage Density: {harvestPassageDensity} cells/cm²</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>Number of Population Doublings for REP1: {numberOfPopulationDoublingsForRep1}</ListGroup.Item>
              <ListGroup.Item>Population Doubling Time (Days): {populationDoublingTimeDays}</ListGroup.Item>
              <ListGroup.Item>REP1 Duration (Days): {rep1DurationDays}</ListGroup.Item>
              <ListGroup.Item>Number of Population Doublings for REP2: {numberOfPopulationDoublingsForRep2}</ListGroup.Item>
              <ListGroup.Item>REP2 Duration (Days): {rep2DurationDays}</ListGroup.Item>
              <ListGroup.Item>Total Process Time (Days): {totalProcessTime}</ListGroup.Item>
              <ListGroup.Item>Media Volume Consumed (L): {mediaVolumeConsumed}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Calculations;
