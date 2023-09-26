import React from "react";
import testSary from "../assets/test.jpeg";
import "./Cards.css";
import "../assets/Css/Bouton.css";
export default function Cards() {
  const data = ["1", "2", "3", "4"];
  return (
    <div className="row">
      {data.map((el, i) => (
        <div key={i} className="col-lg-12 col-md-6 col-12">
          <div className="card my-2 rounded-2">
            <div className="row">
              <div className="col-7 p-2 position-relative">
                <div style={{ minHeight: "80px", maxHeight: "90px" }}>
                  <div
                    className="px-3 ps-4 position-absolute"
                    style={{ zIndex: 99, width: "110%", top: "15%", left: 0 }}
                  >
                    <h4 className="" style={{ fontSize: "18px" }}>
                      Des enjeux pour les joueurs{" "}
                    </h4>
                    <div className="text-muted fw-bold h6">Actus</div>
                  </div>
                </div>
              </div>
              <div className="img-new col-5">
                <img src={testSary} className="card-img-top h-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
