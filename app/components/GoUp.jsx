"use client";
import { useEffect, useState } from "react";

const GoUp = () => {
  const [show, setShow] = useState(false);
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setShow(!show);
      } else setShow(false);
    });
  }, []);
  return <div onClick={goUp} className={show ? "logo" : "logo close"}></div>;
};

export default GoUp;
