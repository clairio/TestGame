import LiveIm from '../assets/live-ims.jpg'

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <MDBCard className='w-75'>
        <MDBCardBody>
          <MDBCardTitle>Live</MDBCardTitle>
          <MDBCardText>
            <small className='text-muted'>En live actuellement</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' height={500} src={LiveIm} alt='...' />
      </MDBCard>
    </div>
  );
}