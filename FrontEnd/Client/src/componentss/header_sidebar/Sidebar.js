import React from "react";
import home from "./images/Path 255.png";
import bell from "./images/Path 254.png";
import downArrow from "./images/Path 257.png";
import upArrow from "./images/Path 258.png";
import eye from "./images/Path 249.png";
import tag from "./images/Path 266.png";
import logo from "./images/Logo.png";
//import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="main">
      <div className="side-bar">
        <img src={logo} alt='logo'></img>
        <ul>
          <li><img src={home} alt="*"></img><span>Property</span></li>
          <li><img src={bell} alt="*"></img><span>Assistance</span></li>
          <li><img src={downArrow} alt="*"></img><span>Received Interest</span></li>
          <li><img src={upArrow} alt="*"></img><span>Sent Interest</span></li>
          <li><img src={eye} alt="*"></img><span>Property Views</span></li>
          <li><img src={tag} alt="*"></img><span>Tariff Plan</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
