import React from "react";
import { useGlobalContext } from "./context";

export default function Pagination({ index }) {
  const { setIndex } = useGlobalContext();

  const handleClick = (e) => {
    setIndex(+e.target.dataset.index);
  };

  return (
    <button className="pag-btn" data-index={index} onClick={handleClick}>
      {index}
    </button>
  );
}
