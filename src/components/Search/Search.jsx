import { CiSearch } from "react-icons/ci";

import "./Search.css";

export default function Search() {
  return (
    <div className="sr-container">
      <div className="sr-box">
        <input className="sr-input" type="text" placeholder="Search" />
        <button className="sr-button">
          <a href="/">
            <CiSearch className="sr-search" />
          </a>
        </button>
      </div>
    </div>
  );
}
