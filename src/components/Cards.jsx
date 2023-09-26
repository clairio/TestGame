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
          <div className="card cardnew my-2 rounded-2">
            <div className="row g-0">
              <div className="col-7 p-2 position-relative">
                <div style={{ minHeight: "120px", maxHeight: "180px" }}>
                  <div
                    className="px-3 ps-4 position-absolute"
                    style={{ zIndex: 99, width: "110%", top: "15%", left: 0 }}
                  >
                    <h6 className=" p-0 pt-3" >
                    Xbox Series X : Les Nouveaux Jeux Qui Vont Vous En Mettre Plein les Yeux en 2023 
                    </h6>
                    <span className="text-muted fw-bold">Actus</span>
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
