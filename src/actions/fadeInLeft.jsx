"use client";
// Note: use this as <FadeInLeft><children /></FadeInLeft>
import React, { useEffect } from "react";

export default function FadeInLeft(props) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fadeInLeft");
        }
      });
    });

    const elements = document.querySelectorAll("#children_fadeInLeft");
    elements.forEach((el) => {
      observer.observe(el);
    });
  });
  return (
    <>
      <div id="children_fadeInLeft" className="opacity-0">
        {props.children}
      </div>
    </>
  );
}
