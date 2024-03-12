import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

interface GrexInformationProps {
  startingSeries: number // or string, if that's more appropriate
  finalSeries: number; // or string
  passageRequired: boolean;
  rep2Exists: boolean;
}

function GrexInformation({ 
  startingSeries, 
  finalSeries, 
  passageRequired, 
  rep2Exists 
}: GrexInformationProps) {
  return (
    <Card>
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

