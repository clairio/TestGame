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
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <Cards />
        </div>
      </div>
    </div>
  );
}
