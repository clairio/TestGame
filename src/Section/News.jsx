import React from "react";
import Cards from "../components/Cards";
import testSary from '../assets/halo.png'
import './new.css'
import ActuImg from '../assets/Actua.png'
export default function News() {
  return (
    <div className="" style={{margin:'150px 0'}}>
      <div className="d-flex justify-content-between align-items-center pb-3">
        <div className=""><img src={ActuImg} className="w-75" alt="..."/></div>
        <div>
          <button className="xboxbtnsm">tout voir</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 col-12" >
          <div className="card top-new" style={{height:'93%'}}>
          <img src={testSary} className="card-img-top h-100 object-fit-cover" alt="..." />
          <div className="text-new position-absolute p-4 text-white" style={{bottom:0,zIndex:'12'}}>
            <h1>Les Jeux Xbox Optimisés pour la Xbox Series X :</h1>
            <span className="fst-italic"> Une Expérience de Jeu Sans Précédent pour les joueurs qui veulent des visuels incroyable.</span>
          </div>
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <Cards />
        </div>
      </div>
    </div>
  );
}
