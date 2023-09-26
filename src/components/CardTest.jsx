import React from "react";
import testSary from "../assets/test.jpeg";
import "./Cards.css";
import cyber from "../assets/cyber.jpg";
import crys from "../assets/crys.png";
import dbz from "../assets/dbz.png";
import far from "../assets/far.png";
import sept from "../assets/sept.svg"
import huit from "../assets/huit.svg"
export default function CardTest() {
  const data = [
    { score: sept, src: cyber },
    { score: huit, src: crys },
    { score: sept, src: dbz },
    { score: huit, src: far },
  ];
  return (
    <div>
      <div className="row g-3">
        {data.map((el, i) => (
          <div key={i} className="col-lg-3 col-md-6 col-12" style={{ height: "330px" }}>
            <div
              className="card border-0 my-2 rounded-2 h-100 position-relative"
              style={{
                background: "url(" + el.src + ")",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="d-inline position-absolute score d-flex align-items-center justify-content-center"
                style={{
                
                  top: "0",
                  right: "0",
                
                }}
              >
                <img src={el.score} width={50} height={50} className="card-img-top" alt="..." />
              </div>
              <div
                className="card-body position-absolute w-100"
                style={{ bottom: 0, height: "200px" }}
              >
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
