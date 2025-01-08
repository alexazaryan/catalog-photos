import { useEffect, useState } from "react";
import ModelWindow from "../ModelWindow/ModelWindow";

import "./BurgerMenu.css";
export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`box-line__general`}>
      <ul className="box-line" onClick={handleClick}>
        <li className={`line-one ${isOpen ? "line-one__active" : ""}`}></li>
        <li className={`line-two ${isOpen ? "line-two__none" : ""}`}></li>
        <li className={`line-three ${isOpen ? "line-three__active" : ""}`}></li>
      </ul>
      <div className={`model-container ${isOpen ? "show" : ""}`}>
        <ModelWindow />
      </div>
    </div>
  );
}
