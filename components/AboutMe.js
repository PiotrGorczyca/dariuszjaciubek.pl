import React from "react";
import Image from "next/image";
import ColumnBG from "../public/img/DJ-training.png";

const AboutMe = () => {
  return (
    <>
      <div className="container bg-blue-500/50 ">
        <div className="flex gap-5 content-center h-screen w-4/5 m-auto max-w-[90rem] mt-10">
          <div className=" relative w-1/3 column1 flex-1 text-center">
            <Image src={ColumnBG} layout="fill" objectFit="contain" className="drop-shadow-xl"></Image>
          </div>
          <div className="column2 flex-1 text-center">opis 2</div>
          <div className="column3 flex-1 text-center">opis 3</div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
