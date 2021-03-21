import React from "react";
import { useGlobalContext } from "./context";

export default function Pagination({ cIndex }) {
  const { setIndex, index } = useGlobalContext();

  const handleClick = (e) => {
    setIndex(+e.target.dataset.index);
    // e.target.classList.add("active-btn");
  };

  return (
    <button
      className={index === cIndex ? "pag-btn active-btn" : "pag-btn"}
      data-index={cIndex}
      onClick={handleClick}
    >
      {cIndex}
    </button>
  );
}
