import React from "react";
import Image from "next/image";
import footerBG from "../public/img/footer.jpg";
import FB from "../public/img/facebook.svg";
import IG from "../public/img/instagram.svg";

const Footer = ({ kontaktRef }) => {
  return (
    <div className="relative bg-gradient-to-t from-black/90 to-blue-500/80 " id="footer" ref={kontaktRef}>
      <Image src={footerBG} layout="fill" objectFit="cover" className="-z-10"></Image>
      {/* <div className="py-10" style={{ backgroundImage: `url(${footerBG})`, width: "100%", height: "100%" }}> */}
      <h3 className="text-white font-bold text-2xl text-center pt-20 pb-5">Chętnie odpowiem na Twoje pytania.</h3>
      <h3 className="text-white font-bold text-2xl text-center py-5">Skontaktuj się ze mną poprzez:</h3>
      <div className="flex gap-5 justify-around my-10 max-w-[92rem] m-auto">
        <div>
          <h4 className="text-white text-lg text-center font-semibold">
            Media <br></br>społecznościowe:
          </h4>
          <div className="flex content-center justify-center mt-1 mb-10 gap-2 w-full">
            <a href="https://www.facebook.com/DaroJaciubPersonalTrainer" className=" transition-all duration-200">
              <Image src={FB} width={60} height={60} layout="fixed" />
            </a>
            <a href="https://www.instagram.com/dariuszjaciubek/" className=" transition-all duration-200">
              <Image src={IG} width={60} height={60} layout="fixed" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white text-center text-lg font-semibold">Telefon:</h4>
          <a href="tel:+48513240269" target="_blank" rel="noopener noreferrer">
            <p className="cursor-pointer pt-5 text-white font-bold">+48 513 240 269</p>
          </a>
        </div>
      </div>
      <div className="bg-black/70 w-screen h-10"></div>
    </div>
  );
};

export default Footer;
