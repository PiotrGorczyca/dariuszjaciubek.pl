import React from "react";
import Image from "next/image";
import SplashImage from "../public/img/Dariusz Jaciubek.png";

const TopSplash = () => {
  return (
    <>
      <div id="container" className="flex sm:content-center justify-center max-w-5xl m-auto h-auto sm:h-screen gap-5 w-full flex-wrap">
        <div className="flex flex-col content-center justify-center flex-1 p-10">
          <h1 className="mt-10 sm:mt-0 font-black text-5xl mb-10 text-blue-500" id="title">
            DARIUSZ JACIUBEK
          </h1>
          <p id="splashDescription">
            Jestem trenerem personalnym i wykładowcą. Posiadam duży bagaż doświadczeń, pełen wachlarz klientów i zapał do działania. Z wielką chęcią
            pomogę Tobie lub Twoim bliskim.
          </p>

          <button
            id="splashButton"
            className="bg-blue-500 text-lg tracking-wider font-semibold uppercase w-fit text-white rounded px-8 py-2 mt-10 shadow-lg hover:bg-blue-300 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <a href="https://www.facebook.com/DaroJaciubPersonalTrainer" target="_blank">
              Poznajmy się
            </a>
          </button>
        </div>
        <div className="relative  flex-2 sm:flex-1 w-full h-200 py-20" id="splashImage">
          {/* <div className="relative sm:w-full h-100 "> */}
          <Image src={SplashImage} layout="fill" objectFit="contain" />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default TopSplash;
