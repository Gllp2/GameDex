import React, { useEffect, useRef, useState } from "react";
import "../styles/LandingPage.css";

const GradientBackground = () => {
  const interactiveRef1 = useRef(null);
  const interactiveRef2 = useRef(null);
  const interactiveRef3 = useRef(null);
  const [curX1, setCurX1] = useState(0);
  const [curY1, setCurY1] = useState(0);
  const [tgX1, setTgX1] = useState(0);
  const [tgY1, setTgY1] = useState(0);
  const [curX2, setCurX2] = useState(0);
  const [curY2, setCurY2] = useState(0);
  const [tgX2, setTgX2] = useState(0);
  const [tgY2, setTgY2] = useState(0);
  const [curX3, setCurX3] = useState(0);
  const [curY3, setCurY3] = useState(0);
  const [tgX3, setTgX3] = useState(0);
  const [tgY3, setTgY3] = useState(0);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCurX1((prev) => prev + (tgX1 - prev) / 20);
      setCurY1((prev) => prev + (tgY1 - prev) / 20);
      setCurX2((prev) => prev + (tgX2 - prev) / 25);
      setCurY2((prev) => prev + (tgY2 - prev) / 25);
      setCurX3((prev) => prev + (tgX3 - prev) / 15);
      setCurY3((prev) => prev + (tgY3 - prev) / 15);

      if (interactiveRef1.current) {
        interactiveRef1.current.style.transform = `translate(${Math.round(curX1)}px, ${Math.round(curY1)}px)`;
      }
      if (interactiveRef2.current) {
        interactiveRef2.current.style.transform = `translate(${Math.round(curX2)}px, ${Math.round(curY2)}px)`;
      }
      if (interactiveRef3.current) {
        interactiveRef3.current.style.transform = `translate(${Math.round(curX3)}px, ${Math.round(curY3)}px)`;
      }
    }, 1000 / 60);

    return () => clearInterval(moveInterval);
  }, [
    curX1, curY1, tgX1, tgY1,
    curX2, curY2, tgX2, tgY2,
    curX3, curY3, tgX3, tgY3,
  ]);

  const handleMouseMove = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    setTgX1(mouseX);
    setTgY1(mouseY);
    setTgX2(mouseX - 100);
    setTgY2(mouseY + 50);
    setTgX3(mouseX + 80);
    setTgY3(mouseY - 30);
  };

  return (
    <div className="gradient-bg-container" onMouseMove={handleMouseMove}>
      <div className="gradient-bg">
        <div className="gradient purple1" />
        <div className="gradient purple2" />
        <div className="gradient purple3" />
        <div className="gradient black" />
        <div className="gradient purple4" />
        <div ref={interactiveRef1} className="interactive-gradient interactive1" />
        <div ref={interactiveRef2} className="interactive-gradient interactive2" />
        <div ref={interactiveRef3} className="interactive-gradient interactive3" />
      </div>
    </div>
  );
};



export default GradientBackground;