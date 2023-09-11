"use client";
import React from "react";
import Navbar from "./Navbar";
import * as THREE from "three";
import CELL from "vanta/dist/vanta.net.min";
import Typed from "react-typed";

// import Image from "next/image";
//import { useEffect } from 'react'
const style = {
  title: "text-8xl font-bold text-center text-white",
  subtitle: "text-2xl font-bold text-center text-white",
  msgbox: "text-center mt-36 tracking-widest",
  dynamicmsg: "text-4xl font-semibold text-white",
};
export default function Header() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELL({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          vertexColors: "#3f55ff",
          color: 0x3f55ff,
          backgroundColor: 0x000000,
          points: 13.00,
          maxDistance: 17.00,
          spacing: 17.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <div className="h-screen" ref={vantaRef}>
        <Navbar />
        <div className={style.msgbox}>
          <Typed
            className={style.dynamicmsg}
            strings={["Explore", "Learn", "Create"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
          <h1 className={style.title}>IEEE</h1>
          <h4 className={style.subtitle}>NFSU</h4>
        </div>
      </div>
    </div>
  );
}
