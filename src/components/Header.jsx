import React from "react";
import "./menu.css";
import logo from '../assets/logo.svg'
import ham from '../assets/ham.svg'

export default function Header() {
  return (
    <header className="py-4">
      <div className="d-flex justify-content-between align-items-center m-0 p-0">
       <div className="menu-desk d-lg-block d-none">
       <ul className="menu gap-3 p-0">
          <li style={{color:'#107C10'}}>Home</li>
          <li>Actus</li>
          <li>Tests</li>
          <li>Sorties</li>
        </ul>
       </div>
        <div className="menu-mobile d-lg-none d-block">

        </div>

        <div className="logo mx-auto"><img src={logo} height={25} alt="..." /></div>
        <div className="d-flex align-items-center">
          <div className="search-bar">
          <div className="icon-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="input-search-bar"
              placeholder="Chercher"
            />
         
          </div>
          <div className="ms-3 ">
            <button className="xboxbtn">se connecter</button>
          </div>
        </div>
      </div>
    </header>
  );
}
