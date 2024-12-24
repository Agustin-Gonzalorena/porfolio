"use client";
import { useState } from "react";
import styles from "./BtnSocial.module.css";
import { In, Gh, Cv } from "@/app/svg/svgs";

const BtnSocial = ({ url, icon, text }) => {
  const [hover, setHover] = useState("var(--base)");
  function handleHover() {
    hover == "var(--primary_a)"
      ? setHover("var(--base)")
      : setHover("var(--primary_a)");
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={text}
      className={styles.btn}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="h-5 w-5 mr-1">
        {icon == "in" ? (
          <In color={hover} />
        ) : icon == "gh" ? (
          <Gh color={hover} />
        ) : (
          <Cv color={hover} />
        )}
      </div>
      {text}
    </a>
  );
};

export default BtnSocial;
