import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCalculations } from '../calculations/calculationsSlice'; // Adjust the path as needed



function GrexInformation() {

  const calculations = useSelector(selectCalculations);
  const theoreticalStartingSurfaceArea = calculations.theoreticalStartingSurfaceArea;

  const determineStartingSeries = (area: number) => {
    console.log(theoreticalStartingSurfaceArea);
    console.log('theoreticalStartingSurfaceArea:', area)
    if (area < 2) return "You need more cells!";
    if (area >= 2 && area < 5) return "2cm² G-Rex option";
    if (area >= 5 && area < 10) return "5cm² G-Rex option";
    if (area >= 10 && area < 50) return "10cm² G-Rex option";
    if (area >= 50 && area < 100) return "50cm² G-Rex option";
    if (area >= 100 && area < 300) return "100cm² G-Rex option";
    if (area >= 300 && area < 500) return "300cm² G-Rex option";
    if (area >= 500) return "500cm² G-Rex option";
  };

  const startingSeries = determineStartingSeries(theoreticalStartingSurfaceArea);
  const finalSeries = 500

  // Assuming passageRequired and rep2Exists are also part of your calculations state or another state,
  // fetch them using useSelector or pass them as props as necessary.
  // For demonstration, I'll assume they're static.
  const passageRequired = false; // Placeholder
  const rep2Exists = true; // Placeholder

  return (
    <Card className="card text-bg-success">
      <Card.Header as="h5">G-REX Information</Card.Header>
      <ListGroup variant="flush">
        <ListGroupItem>
          Starting G-REX Series (cm²): {startingSeries}
        </ListGroupItem>
        <ListGroupItem>
          Final G-REX Series (cm²): {finalSeries}
        </ListGroupItem>
        <ListGroupItem>
          Is passage necessary?: {passageRequired ? 'Yes' : 'No'}
        </ListGroupItem>
        <ListGroupItem>
          Does REP2 Exist?: {rep2Exists ? 'Yes' : 'No'}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default GrexInformation;

