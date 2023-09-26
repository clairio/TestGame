import React from "react";
import Cards from "../components/Cards";
import testSary from '../assets/halo.png'
import './new.css'
export default function News() {
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between align-items-center pb-3">
        <h1 className="line">Mate un peu le <span className="xboxcolor">News</span> </h1>
        <div>
          <button className="xboxbtnsm">tout voir</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8 col-12" >
          <div className="card top-new" style={{height:'93%'}}>
          <img src={testSary} className="card-img-top h-100 object-fit-cover" alt="..." />
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <Cards />
        </div>
      </div>
    </div>
  );
}
