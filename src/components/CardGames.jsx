import React from "react";
import testSary from "../assets/test.jpeg";
import "./Cards.css";
import fortnite from "../assets/fortnite.svg";
import Image from "../assets/Image";
export default function CardGames() {
  const data = [
    { logo: Image.forzalogo, wall: Image.forzawall },
    { logo: Image.starfieldlogo, wall: Image.starfield },
    { logo: Image.witchlogo, wall: Image.witchwall },
    { logo: Image.warlogo, wall: Image.warwall },
  ];
  return (
    <div className="row">
      {data.map((el, i) => (
        <div key={i} className="col-lg-3 col-md-6 col-12">
          <div className="card my-2 rounded-2" >
            <div className="row g-0 row-reverse">
              <div className="col-4 p-2 ">
                <div className="row">
                  <div className="col-12 d-flex">
                    <img className="ms-4 mt-4" width={70} src={el.logo} alt="..." />
                  </div>
                  <div className="col-12">
                    <div
                      className="text-center mt-1 fw-bold me-4"
                      style={{ width: "120px", fontSize: "11px" }}
                    >
                      PC | PS4 | XBOX
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-game col" style={{minHeight:'150px',background:'url('+el.wall+')',backgroundSize:'cover'}}>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
