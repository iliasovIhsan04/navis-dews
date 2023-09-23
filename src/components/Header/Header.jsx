import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BiColor, BiPhoneCall } from "react-icons/bi";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="block">
          <NavLink to="/" className="page">
            nevisdevs.
          </NavLink>
          <NavLink to="/Ihsan" className="page">
            Ihsan
          </NavLink>
          <NavLink to="directions" className="page">
            направления
          </NavLink>
          <NavLink to="project" className="page">
            проекты
          </NavLink>
          <NavLink to="call-me-back" className="page">
            <BiPhoneCall style={{marginRight:'10px'}}/>
            перезвоните мне
          </NavLink>
          <NavLink to="eng" className="page">
            eng
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
