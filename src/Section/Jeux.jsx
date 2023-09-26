import React from "react";
import CardGames from "../components/CardGames";
import pagina from "../assets/paginat.svg";

export default function Jeux() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-start mb-5 line-jeux-sect">Jeu populaire | à venir</h1>
      </div>
      <CardGames />
      <div className="d-flex justify-content-center mt-2">
        <svg
          width={75}
          height={75}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180.08 49.55"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".cls-1,.cls-3{fill:none;stroke:#878787;stroke-miterlimit:10;}.cls-1{stroke-width:6px;}.cls-2{font-size:37.56px;fill:#262626;font-family:Impact;letter-spacing:0.02em;}.cls-3{stroke-width:3px;}",
              }}
            />
          </defs>
          <g id="Calque_2" data-name="Calque 2">
            <g id="sss">
              <line
                className="cls-1"
                x1="19.39"
                y1="4.55"
                x2="2.12"
                y2="21.82"
              />
              <line
                className="cls-1"
                x1="7.02"
                y1="24.14"
                x2="19.39"
                y2="37.55"
              />
              <line
                className="cls-1"
                x1="160.68"
                y1="4.55"
                x2="177.96"
                y2="21.82"
              />
              <line
                className="cls-1"
                x1="173.06"
                y1="24.14"
                x2="160.68"
                y2="37.55"
              />
              <text
                className="cls-2"
                transform="translate(65.38 37.13) scale(0.63 1)"
              >
                1
              </text>
              <text
                className="cls-2"
                transform="translate(94.68 37.13) scale(0.63 1)"
              >
                4
              </text>
              <line className="cls-3" x1="85.68" x2="85.68" y2="44.5" />
            </g>
          </g>
        </svg>
      </div>
      <div className="mb-3 d-flex">
        <button className="xboxbtnsm ms-auto">tout voir</button>
      </div>
    </div>
  );
}
