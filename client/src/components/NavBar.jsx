import "./style.css";
import "../index.css";
import React, { useState } from "react";
import BasicModal from "./Modal.jsx"

function NavBar(props) {
  const [selectedLi, setSelectedLi] = useState(null);

  return (
    <div>
      <ul className="navBar">
        <a href="#landing_page">
          <li
            onClick={() => setSelectedLi(0)}
            style={{ color: selectedLi === 0 ? "blue" : "white" }}
          >
            HOME
          </li>
        </a>
        <a href="#body_page">
          <li
            onClick={() => setSelectedLi(1)}
            style={{ color: selectedLi === 1 ? "blue" : "white" }}
          >
            NEWS
          </li>
        </a>
        <li
          onClick={() => setSelectedLi(3)}
          style={{ color: selectedLi === 3 ? "blue" : "white" }}
        >
         <BasicModal postArticleData={props.postArticleData} />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
