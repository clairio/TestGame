import React from "react";
import "./menu.css";
import logo from "../assets/logo_1.svg";
import ham from "../assets/ham.svg";

export default function Header() {
  return (
    <div className="head" style={{marginBottom:'150px'}}>
        <header className="py-4 position-fixed container-fluid principale">
    <div className="container-lg contaier-fluid">
    <div className="d-flex justify-content-between align-items-center m-0 p-0">
        <div className="d-lg-flex d-none gap-3 align-items-center">
          <div className="m-0 p-0 align-self-start" style={{transform:'translate(0,-8px)'}}>
            <img
              src={logo}
              className=""
              height={30}
              alt="..."
            />
           
          </div>
          <div className="menu-desk m-0 p-0 d-lg-block d-none align-self-end">
            <ul className="menu gap-3 p-0 align-items-end">
              <li style={{ color: "#107C10" }}>Home</li>
              <li>Actus</li>
              <li>Tests</li>
              <li>Sorties</li>
            </ul>
          </div>
        </div>
        <div className="menu-mobile d-lg-none d-block">
          <svg
            width={55}
            height={55}
            className="xboxcolor"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM14.833 9.25C15.2472 9.25 15.583 8.91421 15.583 8.5C15.583 8.08579 15.2472 7.75 14.833 7.75V9.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM14.833 17.25C15.2472 17.25 15.583 16.9142 15.583 16.5C15.583 16.0858 15.2472 15.75 14.833 15.75V17.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM5.5 9.25H14.833V7.75H5.5V9.25ZM5.5 17.25H14.833V15.75H5.5V17.25Z"
              fill="#107C10"
            />
          </svg>
        </div>
        <img
              src={logo}
              className="d-block d-lg-none"
              height={20}
              alt="..."
            />
        <div className="d-flex align-items-center">
          <div className="search-bar d-lg-block d-none">
            <div className="icon-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"20px"}
                height={"20px"}
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
          <div className="d-lg-none d-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>
          <div className="ms-3 ">
            <button className="xboxbtn">se connecter</button>
          </div>
        </div>
      </div>
    </div>
    </header>
    </div>
  );
}
