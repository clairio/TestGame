import React from "react";
import Image from "../assets/Image";
import './Trailer.css'

export default function Trailer() {
  return (
    <div className="my-5 py-5">
      <div className="row trailer">
        <div className="col-6">
          <div className="content p-4">
            <h4 className="fw-bold mb-3">
              Starfield : Explorez l'Univers Infini
            </h4>
            <p>
              <span className="fw-bold">Description :</span>{" "}
              <span className="text-muted fs-6">
                Dans Starfield, préparez-vous à vivre une aventure
                interstellaire épique comme jamais auparavant. Développé par
                Bethesda Game Studios, le studio derrière des titres
                emblématiques tels que The Elder Scrolls et Fallout, Starfield
                vous plonge dans un univers où l'exploration, la découverte et
                l'intrigue se rejoignent pour créer une expérience de jeu
                inoubliable.
              </span>
            </p>
            <div className="info">
              <div className="d-flex h-100 flex-column justify-content-center align-items-center">
               <div className="d-flex gap-5 justify-content-center"> <img width={95} src={Image.bethesda} alt="..." /> <img width={70} src={Image.starfieldlogo} alt="..." /></div>
                <div className="mt-3">
                  <img
                    className=""
                    width={230}
                    src={Image.console}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="ratio ratio-16x9 rounded-5" style={{overflow:'hidden'}}>
            <iframe
              src="https://www.youtube.com/embed/kfYEiTdsyas?si=nUNtCTW9A03vmGLF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
