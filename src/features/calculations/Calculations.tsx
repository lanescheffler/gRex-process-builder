import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

interface CalculationsProps {
  startingCellPopulation: number;
  finalCellPopulation: number;
  populationDoublingTimeHrs: number; // Assuming population doubling time is provided in hours
  seedingDensity: number;
  maxCellDensity: number;
  rep2SeedingDensity: number; // Assuming an additional prop for REP2 seeding density
  finalCellPopulationRep1: number; // This would be needed for REP1 final population calculation
  startingCellPopulationRep2: number; // Starting population for REP2
}

const Calculations: React.FC<CalculationsProps> = ({
  startingCellPopulation,
  finalCellPopulation,
  populationDoublingTimeHrs,
  seedingDensity,
  maxCellDensity,
  rep2SeedingDensity,
  finalCellPopulationRep1,
  startingCellPopulationRep2,
}) => {
  const log2 = (num: number) => Math.log(num) / Math.log(2);

  // Calculations
  const theoreticalStartingSurfaceArea = startingCellPopulation / seedingDensity;
  const actualStartingSurfaceArea = theoreticalStartingSurfaceArea; // Simplified for this example
  const theoreticalFinalSurfaceArea = finalCellPopulation / maxCellDensity;
  const actualFinalSurfaceArea = theoreticalFinalSurfaceArea; // Simplified for this example
  const numberOfCellsToSeedRep2 = rep2SeedingDensity * actualStartingSurfaceArea; // Simplification
  const harvestPassageDensity = 12500000; // Provided as a constant for this example
  const numberOfPopulationDoublingsForRep1 = log2(finalCellPopulationRep1 / startingCellPopulation);
  const populationDoublingTimeDays = populationDoublingTimeHrs / 24;
  const rep1DurationDays = numberOfPopulationDoublingsForRep1 * populationDoublingTimeDays;
  const numberOfPopulationDoublingsForRep2 = log2(finalCellPopulation / startingCellPopulationRep2);
  const rep2DurationDays = numberOfPopulationDoublingsForRep2 * populationDoublingTimeDays;
  const totalProcessTime = rep1DurationDays + rep2DurationDays; // Simplified, not including additional time
  const mediaVolumeConsumed = 26; // Provided as a constant for this example, assuming a fixed volume

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

Calculations.defaultProps = {
  startingCellPopulation: 50000000,
  finalCellPopulation: 100000000000,
  populationDoublingTimeHrs: 24,
  seedingDensity: 500000,
  maxCellDensity: 40000000,
  rep2SeedingDensity: 500000,
  finalCellPopulationRep1: 2500000000,
  startingCellPopulationRep2: 1250000000,
};

export default Calculations;
