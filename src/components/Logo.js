import { gsap } from "gsap";
import "../styles/LogoStyles.css";
import React, { useEffect } from "react";

export default function Logo() {
  useEffect(() => {
    logoAnimation();
  });

  const timeline = gsap.timeline({ repeat: -1 });
  const chars = document.querySelectorAll(".text");

  const logoAnimation = () => {
    timeline
      .from(chars, { opacity: 1, scale: 0, ease: "sine", delay: 0.55 })
      .to(
        ".text",
        {
          "--font-weight": 900,
          duration: 1,
          ease: "sine.inOut",
          stagger: {
            yoyo: true,
            each: 0.1,
            repeat: -1,
          },
        },
        1
      );
  };
  return (
    <div className="body" onLoad={() => logoAnimation()}>
      {console.log(chars)}
      <div className="text one">S</div>
      <div className="text two">h</div>
      <div className="text three">a</div>
      <div className="text four">d</div>
      <div className="text five">e</div>
      <div className="text six">s</div>
    </div>
  );
}
