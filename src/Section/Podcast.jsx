import React from "react";
import './podcast.css'
import pod from '../assets/pod.png'

export default function Podcast() {
  return (
    <div className=" d-flex flex-column " style={{marginTop:"100px",borderBottom:"1px solid rgba(16, 124, 16, 0.4)"}} >
        <div className="my-5 d-flex justify-content-between align-items-center">
        <div className="">
          <img src={pod} className="" height={"170px"} alt="..." />
        </div>
        
      </div>
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
