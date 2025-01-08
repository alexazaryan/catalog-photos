import { useState, useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0); // Активный элемент меню
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 680); // Определяем текущий режим

  const menuItems = ["Photo", "Videos", "About", "Contact"];

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 680);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hd-general">
      <div className="hd-wrap">
        <a href="/" className="hd-link">
          <img className="hr-img-ribbon" src="./ribbon.png" alt="ribbon" />
          Catalog
        </a>

        {isMobileView ? (
          <div className="hr-burger-menu">
            <BurgerMenu />
          </div>
        ) : (
          <ul className="hd-box-li">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`hd-li ${activeIndex === index ? "active" : ""}`}
                tabIndex="0"
                onClick={() => setActiveIndex(index)} // При клике обновляется активный индекс
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
