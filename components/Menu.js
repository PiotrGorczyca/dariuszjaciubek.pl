import React, { useState } from "react";
import Image from "next/image";

import FB from "../public/img/facebook.svg";
import IG from "../public/img/instagram.svg";
import Logo from "../public/img/DJ logo.png";
const Menu = ({ executeScroll, kontaktRef, ofertaRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div id="menu" className="fixed top-0 z-50 w-full bg-white shadow-md">
        <div className="max-w-6xl h-full m-auto flex content-center justify-between gap-5 px-5">
          <div id="logo" className="py-3">
            <Image src={Logo} width={30} height={40}></Image>
          </div>
          <div
            className={`space-y-2 flex flex-col justify-center align-bottom cursor-pointer transition-all duration-200 ${
              menuOpen ? "-translate-x-[12rem]" : "-translate-x-0"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-0.5 transition-all duration-150 ${menuOpen ? "bg-blue-500 rotate-45 origin-left" : "bg-gray-500"}`}></span>
            <span
              className={`block w-7 h-0.5 transition-all duration-150 ${menuOpen ? "bg-blue-500 -rotate-45 -translate-x-1" : "bg-gray-500 "}`}
            ></span>
            <span
              className={`block w-3 h-0.5 transition-all duration-150 ${
                menuOpen ? "bg-blue-500 rotate-45 origin-top-right translate-x-2" : "bg-gray-500"
              }`}
            ></span>
          </div>
        </div>
      </div>
      <div
        id="menuBtns"
        className={`flex flex-col bg-white shadow-lg content-center justify-around w-1/2 sm:w-1/4 h-screen fixed right-0 top-0 z-50 transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="buttons flex flex-col gap-5">
          {/* <button className="menuBtn">O mnie</button> */}
          <button
            className="menuBtn"
            onClick={() => {
              executeScroll(ofertaRef), setMenuOpen(false);
            }}
          >
            Oferta
          </button>

          <button
            className="menuBtn"
            onClick={() => {
              executeScroll(kontaktRef), setMenuOpen(false);
            }}
          >
            Kontakt
          </button>
        </div>

        <div id="socialMedia" className="flex content-center justify-center mt-1 gap-2 w-full">
          <a href="https://www.facebook.com/DaroJaciubPersonalTrainer" className="hover:scale-105 transition-all duration-200">
            <Image src={FB} width={60} height={60} layout="fixed" />
          </a>
          <a href="https://www.instagram.com/dariuszjaciubek/" className="hover:scale-105 transition-all duration-200">
            <Image src={IG} width={60} height={60} layout="fixed" />
          </a>
        </div>
      </div>
      <div
        className={` bg-gray-500 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen opacity-50 z-40 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Menu;
