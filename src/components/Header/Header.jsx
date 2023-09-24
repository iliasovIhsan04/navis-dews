import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiColor, BiPhoneCall } from "react-icons/bi";
import {RxHamburgerMenu} from 'react-icons/rx'
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="block_all">
          <h1> nevisdevs.</h1>
          <div className="block">
            <a to="/Ihsan" className="page">
              <div className="burger_block">
                <div className="burger_box1"></div>
                <div className="burger_box2"></div>
              </div>
              {/* <RxHamburgerMenu/> */}
            </a>
            <a to="directions" className="page">
              направления
            </a>
            <a to="project" className="page">
              проекты
            </a>
            <a to="call-me-back" className="page">
              <BiPhoneCall style={{ marginRight: "10px" }} />
              перезвоните мне
            </a>
            <a to="eng" className="page">
              eng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
