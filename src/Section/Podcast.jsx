import React from "react";
import './podcast.css'

export default function Podcast() {
  return (
    <div className=" d-flex flex-column " style={{marginTop:"100px",borderBottom:"1px solid rgba(16, 124, 16, 0.4)"}} >
        <span className="p-2 fw-bold text_u" style={{textTransform:"uppercase",fontSize:"50px"}}> Les Derniers Podcasts </span>
        <span className="separator border">  </span>
        <div className="d-flex p-2">

            <div className="p-2 cart_box_shad" style={{width:'200px'}}>
                <span className="sh_text">Podcast XYG - Replay #05 - Nos attentes 2023 chez Xbox</span>
            </div>

            <div className="p-2 cart_box_shad ml-2" style={{width:'200px'}}>
                Podcast XYG - Ep. 02 à 20h00 - Les Game Awards : incontournables ?
            </div>

            <div className="p-2 cart_box_shad ml-2" style={{width:'200px'}}>
                Capcom pourrait augmenter le prix de ses jeux, comme Ubisoft et Microsoft
            </div>

            <div className="p-2 cart_box_shad ml-2" style={{width:'200px'}}>
                Sekiro : Shadows Die Twice atteint un gros cap symbolique de ventes
            </div>

        </div>
    </div>
  );
}
