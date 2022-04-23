import React from "react";
import Image from "next/image";
import Rozluz from "../public/img/services/rozluźnianie_m-p.jpg";
import Train from "../public/img/services/training.jpg";
import Therapy from "../public/img/services/terapia_ruchowa.jpg";
import Coaching from "../public/img/services/doradztwo_zarządzanie.jpg";
import Diet from "../public/img/services/dieta.jpg";
import Lecture from "../public/img/services/prelekcje_żywieniowe.jpg";
import Consult from "../public/img/services/konsultacja_żywieniowa.jpg";
import Daro from "../public/img/services/Dariusz.jpg";
import Plan from "../public/img/services/plan_treningowy.jpg";

const Offer = ({ ofertaRef }) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mt-10">Tak mogę Ci pomóc:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[92rem] m-auto py-20" ref={ofertaRef}>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative shadow-inner">
            <Image src={Rozluz} layout="fill" objectFit="cover" className="shadow-inner"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Rozluźnianie mięśniowo-powięziowe</h3>
          <p className="m-8">
            Mięśniowo-powięziowe rozluźnianie to jedna z najnowszych i najlepszych metod terapeutycznych w medycynie manualnej. Koncentruje się na
            pracy z systemem mięśniowo-powięziowym, a także poprawia wewnętrzną ruchomość tkanek miękkich, szczególnie powięzi. Jej głównym celem jest
            osiągnięcie symetrycznego, bezbólowego zakresu ruchu w systemie mięśniowo-szkieletowym.
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Train} layout="fill" objectFit="cover"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Trening Personalny/Medyczny</h3>
          <p className="m-8">
            Conajmniej godzinna dawka wiedzy i ćwiczeń mających na celu poprawę Twojego stanu zdrowia lub osiągnięcie Twoich celów!
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Therapy} layout="fill" objectFit="cover"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Terapia Ruchowa</h3>
          <p className="m-8">
            Jest to trening personalny pod kierunkiem fizjoterapeuty, trenera, wykorzystujący profesjonalne urządzenia rehabilitacyjne oraz
            wyselekcjonowane ćwiczenia z zakresu kinezyterapii i pilatesu.
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Coaching} layout="fill" objectFit="cover"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Doradztwo, zarządzanie</h3>
          <p className="m-8">
            Doradztwo i wsparcie dla Managerów, właścicieli klubów, przeszkolenie kadry pracowniczej. Wdrażanie produktów inowacyjnych na rynek Polski
            i zagraniczny. Koordynowanie obiektów służącym poprawie zdrowia i kondycji fizycznej.
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Diet} layout="fill" objectFit="cover"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Dieta</h3>
          <p className="m-8">
            Spersonalizowana dieta ułożona pod Twój cel. Niezależnie co będziesz chciał(a) osiągnąć, dopasuję wszystko do Twoich potrzeb.
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Lecture} layout="fill" objectFit="cover" objectPosition={"center top"}></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Prelekcje żywieniowe, promocja zdrowia</h3>
          <p className="m-8">
            Prelekcje żywieniowe, promocja zdrowia, eventy biznesowe. Zaproś mnie na prelekcję żywieniową, obiecuje Tobie, że zainwestowane pieniądze
            zamienią Twój event na coś specjalnego.
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Consult} layout="fill" objectFit="cover"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Konsultacja żywieniowa</h3>
          <p className="m-8">
            ''Twoje pożywienie powinno być lekarstwem, a twoje lekarstwo powinno być pożywieniem" - Hipokrates. Zapraszam do skorzystania z 60
            minutowej pełnej pasji konsultacji żywieniowej. Miłość do aktywności fizycznej i żywienia jest ze mną od zawsze, teraz mogę pomagać innym!
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Daro} layout="fill" objectFit="cover"></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Kurs Trener Personalny - współpraca CKKS</h3>
          <p className="m-8">
            Trener personalny powinien być osobą posiadającą wnikliwe informacje na temat kreowania programów treningowych dostosowanych do potrzeb
            indywidualnych. Motywuje klienta za pomocą ustalania celów i udzielenia informacji składających się na sukces. Wykwalifikowany trener
            personalny potrafi rozpoznać swój obszar specjalizacji. Jeśli podejrzewa, że stan zdrowia klienta może nie pozwalać na podjęcie się
            określonego wysiłku lub programu żywieniowego, odpowiednio pokieruje swojego podopiecznego drogą prowadzącą do sukcesu, lub zasugeruje
            odpowiednią konsultację medyczną.
          </p>
        </div>
        <div className="rounded-lg mx-5 h-90 overflow-hidden shadow-lg">
          <div className="w-full h-60 relative">
            <Image src={Plan} layout="fill" objectFit="cover" objectPosition={"top center"}></Image>
          </div>
          <h3 className="m-4 ml-8 font-bold text-lg">Plan treningowy</h3>
          <p className="m-8">
            Plan treningowy ''Ruch jest w stanie zastąpić prawie każdy lek, ale wszystkie leki razem wzięte nie zastąpią ruchu'' - Wojciech Oczko.
            Korzyści: -zdrowie -monitoring postępów -pewność, że trenujesz właściwie -jasno określony cel -opieka trenera i dietetyka.
          </p>
        </div>
      </div>
    </>
  );
};

export default Offer;
