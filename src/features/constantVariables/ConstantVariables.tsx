import React, { useState } from "react";
import { Form, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

function ConstantVariables() {
  // State for each constant variable
  const [maxCellDensity, setMaxCellDensity] = useState<number>(40000000); // Example default value
  const [rep2SeedingDensity, setRep2SeedingDensity] = useState<number>(500000); // Example default value

  // You might want to handle changes if the user can edit these constants
  const handleMaxCellDensityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Use Number() to convert the value to a number
    setMaxCellDensity(Number(e.target.value));
  };

  const handleRep2SeedingDensityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Use Number() to convert the value to a number
    setRep2SeedingDensity(Number(e.target.value));
  };

  // If constants are editable, you might want to add a submit handler
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Save the constants to the state, send them to an API, or store them in the global state
    console.log({
      maxCellDensity,
      rep2SeedingDensity,
    });
    // Additional submission logic goes here...
  };

  return (
    <Card className="card text-bg-success">
      <Card.Header as="h5">Constant Variables</Card.Header>
      <ListGroup variant='flush'>
        <Form onSubmit={handleSubmit}>
          <ListGroupItem>
          <Form.Group as={Row} controlId="formMaxCellDensity">
            <Form.Label column sm={6}>
              Max Cell Density (n/cm²)
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="number"
                value={maxCellDensity}
                onChange={handleMaxCellDensityChange}
                // If the constants should not be editable, you can set readOnly attribute
                readOnly
              />
            </Col>
          </Form.Group>
          </ListGroupItem>

          <ListGroupItem>
          <Form.Group as={Row} controlId="formRep2SeedingDensity">
            <Form.Label column sm={6}>
              REP2 Seeding Density (n/cm²)
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="number"
                value={rep2SeedingDensity}
                onChange={handleRep2SeedingDensityChange}
                // If the constants should not be editable, you can set readOnly attribute
                readOnly
              />
            </Col>
          </Form.Group>
          </ListGroupItem>

          {/* Add a submit button if needed */}
          {/* <Button variant="primary" type="submit">
          Save Constants
        </Button> */}
        </Form>
      </ListGroup>
    </Card>
  );
}

export default ConstantVariables;
