import React from "react";
import testSary from "../assets/test.jpeg";
import "./Cards.css";
import cyber from "../assets/cyber.jpg";
import crys from "../assets/crys.png";
import dbz from "../assets/dbz.png";
import far from "../assets/far.png";

import huit from "../assets/huit.svg"
export default function CardTest() {

    const Huit = () => {
        return <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.43 71.14"><g id="Calque_2" data-name="Calque 2"><g id="sss"><g id="huit"><polygon points="0 0 0 71.14 56.57 71.14 73.43 54.29 73.43 0 0 0" fill="#fbfbfb" /><path id="barr8" d="M38.36,17.6A17.71,17.71,0,1,1,24,23.34" fill="none" stroke="#65e065" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={6} /><text transform="translate(30.2 39.67)" fontSize="13.83" fontFamily="StretchProRegular, Stretch Pro">8</text></g></g></g></svg>

    }
const Sept = ()=>{
    return <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.43 71.14"><g id="Calque_2" data-name="Calque 2"><g id="sss"><g id="sept"><polygon points="0 0 0 71.14 56.57 71.14 73.43 54.29 73.43 0 0 0" fill="#fbfbfb" /><path id="barre8" d="M38.36,17.6A17.71,17.71,0,1,1,21.05,27.84" fill="none" stroke="#65e065" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={6} /><text transform="translate(30.2 39.67)" fontSize="13.83" fontFamily="StretchProRegular, Stretch Pro">7</text></g></g></g></svg>

}
  const data = [
    { score: Sept(), src: cyber },
    { score: Huit(), src: crys },
    { score: Sept(), src: dbz },
    { score: Huit(), src: far },
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
                {el.score}
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
