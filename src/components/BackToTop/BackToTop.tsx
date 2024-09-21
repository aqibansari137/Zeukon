"use client";
import { useEffect, useState } from "react";
import "./backToTopstyles.scss";

export const BackToTop = () => {
  const [hideBtn, setHideBtn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHideBtn(false);
      } else {
        setHideBtn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={`back-to-top ${hideBtn ? "hide" : ""}`} onClick={backToTop}>
      <div>
        <i className="bi bi-arrow-up-short"></i>
      </div>
    </div>
  );
};
