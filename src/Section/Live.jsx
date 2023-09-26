import LiveIm from "../assets/live-ims.jpg";
import pod from "../assets/live.png";

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="justify-content-center align-items-center">
      <div className="my-5 d-flex justify-content-between align-items-center">
        <div className="">
          <img src={pod} className="" height={"170px"} alt="..." />
        </div>
        <div className="align-self-end">
          <h1 className="text-start mb-5 line-jeux-sect">
            en ce moment
          </h1>
        </div>
      </div>
     <div>
     <MDBCard className="w-75 mx-auto">
        <MDBCardImage position="bottom" height={500} src={LiveIm} alt="..." />
      </MDBCard>
     </div>
    </div>
  );
}
