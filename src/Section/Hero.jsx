import React from "react";
import "./Hero.css";
import gauche from "../assets/fleche-gauche.svg";
import droite from "../assets/fleche-droite.svg";
import miniMenu from "../assets/menu-mini.svg"

export default function Hero() {
  return (
    <div className="my-5 hero">
      <div className="gauche">
        <img src={gauche} width={50} />
      </div>
      <div className="droite">
        <img src={droite} width={50} />
      </div>
      <div className="menuHero">
        <img src={miniMenu} width={75} />
      </div>
      <div className="row g-0 ">
        <div className="col-6 d-flex h-100">
          <div
            className="bg-secondary h-100 w-100"
            style={{ minHeight: "400px" }}
          >
           <div className="contenu p-5">
           <h1 className="" style={{fontFamily:'stretch pro'}}>Bienvenue</h1>
           </div>
          </div>
        </div>
        <div className="col-6 d-flex h-100">
          <div
            className="bg-secondary h-100 w-100"
            style={{ minHeight: "400px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
