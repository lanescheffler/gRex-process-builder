import React, { useMemo } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUserInput } from '../userInput/userInputSlice';

// Performance: If your calculations are expensive and your component re-renders often, 
// consider using React.memo or useMemo hook to optimize performance.


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

  // wrap in a useMemo object, return the consts along with a dependency array. 
  // Calculations

  const calculations = useMemo(() => {
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
    
    return {
      theoreticalStartingSurfaceArea,
      actualStartingSurfaceArea,
      theoreticalFinalSurfaceArea,
      actualFinalSurfaceArea,
      numberOfCellsToSeedRep2,
      harvestPassageDensity,
      numberOfPopulationDoublingsForRep1,
      populationDoublingTimeDays,
      rep1DurationDays,
      numberOfPopulationDoublingsForRep2,
      rep2DurationDays,
      totalProcessTime,
      mediaVolumeConsumed
      // Include all calculated values here to return them
    };
  }, [startingCellPopulation, finalCellPopulation, populationDoublingTime, seedingDensity, maxCellDensity, rep2SeedingDensity]);
  

  // Return a div with the calculations for demonstration purposes
  return (
    <Card>
      <Card.Header as="h5">Calculations</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>Theoretical Starting Surface Area: {calculations.theoreticalStartingSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Actual Starting Surface Area: {calculations.actualStartingSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Theoretical Final Surface Area: {calculations.theoreticalFinalSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Actual Final Surface Area: {calculations.actualFinalSurfaceArea} cm²</ListGroup.Item>
              <ListGroup.Item>Number of Cells to Seed REP2: {calculations.numberOfCellsToSeedRep2}</ListGroup.Item>
              <ListGroup.Item>Harvest/Passage Density: {calculations.harvestPassageDensity} cells/cm²</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>Number of Population Doublings for REP1: {calculations.numberOfPopulationDoublingsForRep1}</ListGroup.Item>
              <ListGroup.Item>Population Doubling Time (Days): {calculations.populationDoublingTimeDays}</ListGroup.Item>
              <ListGroup.Item>REP1 Duration (Days): {calculations.rep1DurationDays}</ListGroup.Item>
              <ListGroup.Item>Number of Population Doublings for REP2: {calculations.numberOfPopulationDoublingsForRep2}</ListGroup.Item>
              <ListGroup.Item>REP2 Duration (Days): {calculations.rep2DurationDays}</ListGroup.Item>
              <ListGroup.Item>Total Process Time (Days): {calculations.totalProcessTime}</ListGroup.Item>
              <ListGroup.Item>Media Volume Consumed (L): {calculations.mediaVolumeConsumed}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Calculations;
