// SeedingDensityCanvas.tsx
import React from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Card } from 'react-bootstrap';
import styled from 'styled-components';

interface SeedingDensityCanvasProps {
  show: boolean;
  handleClose: () => void;
}

const StyledOffCanvasBody = styled(OffcanvasBody)`
  background-color: #abe7c0

`;

const SeedingDensityCanvas: React.FC<SeedingDensityCanvasProps> = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <OffcanvasHeader closeButton>
        <Offcanvas.Title>Seeding Density Information</Offcanvas.Title>
      </OffcanvasHeader>
      <StyledOffCanvasBody>
        {/* Provide your content here */}
        {/* <Card style={{ borderRadius: 0 }}> */}
          <p>
            Seeding density is important for cell culture. It refers to the number of cells
            planted in a given area. Here's how you can calculate it...
          </p>
          {/* ... more content */}
        {/* </Card> */}
      </StyledOffCanvasBody>
    </Offcanvas>
  );
}

export default SeedingDensityCanvas;
