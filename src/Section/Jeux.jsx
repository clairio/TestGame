import React from "react";
import CardGames from "../components/CardGames";
import pagina from "../assets/paginat.svg";

export default function Jeux() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-center mb-5 line">Jeu populaire | à venir</h1>
      </div>
      <CardGames />
      <div className="d-flex justify-content-center mt-3">
        <img src={pagina} alt="..." className="text-center" width={65} />
      </div>
      <div className="my-3 d-flex">
        <button className="xboxbtnsm ms-auto">tout voir</button>
      </div>
    </div>
  );
}
