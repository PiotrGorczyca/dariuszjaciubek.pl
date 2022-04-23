import Head from "next/head";
import Menu from "../components/Menu";
import TopSplash from "../components/TopSplash";

import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AnimatedBG from "../components/AnimatedBG";

import LogoCarousel from "../components/LogoCarousel/LogoCarousel";
import Footer from "../components/Footer";
import Offer from "../components/Offer";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const kontaktRef = useRef(null);
  const ofertaRef = useRef(null);
  const executeScroll = (r) => {
    r.current.scrollIntoView();
  };

  let t1 = new gsap.timeline({ delay: 0.3 });

  useEffect(() => {
    t1.from("#splashImage", 3, { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, "Start");
    t1.staggerFrom("#title", 1, { y: 30, ease: Power3.easeOut, opacity: 0 }, 0.15, "Start")
      .from("#splashButton", 1, { y: 20, opacity: 0, ease: Power3.easeOut, delay: 0.4 }, 0.35)
      .from("#splashDescription", 1, { y: 10, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, 0.35);
  }, []);
  return (
    <div>
      <Head>
        <title>Dariusz Jaciubek</title>
        <meta name="description" content="Twój trener personalny" />
        <link rel="icon" href="/DJ logo.ico" />
      </Head>
      <div id="contentMain" className="w-full">
        <AnimatedBG />
        <Menu executeScroll={executeScroll} kontaktRef={kontaktRef} ofertaRef={ofertaRef} />
        <TopSplash />
        <LogoCarousel />
        <Offer ofertaRef={ofertaRef} />
        <Footer kontaktRef={kontaktRef} />
      </div>
    </div>
  );
}
