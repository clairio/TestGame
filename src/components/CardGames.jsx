import React from "react";
import testSary from "../assets/test.jpeg";
import './Cards.css'
import fortnite from '../assets/fortnite.svg'
export default function CardGames() {
    const data = ["1","2","3","4"]
  return (
    <div className="row">
      {
        data.map((el,i)=><div key={i} className="col-lg-3 col-md-6 col-12">
            <div  className="card my-2 rounded-2">
        <div className="row row-reverse">
          <div className="col-3 p-2 ">
            <div className="px-3 ps-4 position-relative" style={{minHeight:'140px'}}>
             <div className="position-absolute h-auto"  style={{top:'12%',left:'27%',zIndex:'99'}}>
<img width={70} src={fortnite} alt="..."/>
<div className="text-start mt-1 fw-bold me-4" style={{width:'150px',fontSize:'11px'}}>PC | PS4 | XBOX</div>
             </div>
           
            </div>
          </div>
          <div className="img-game col" >
            <img src={testSary} className="card-img-top h-100  "  alt="..." />
          </div>
        </div>
      </div>
        </div>
      )
      }
    </div>
  );
}
