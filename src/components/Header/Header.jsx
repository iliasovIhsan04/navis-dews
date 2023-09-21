import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="block">
          <NavLink to="/" className="page">
            Главная
          </NavLink>
          <NavLink to="/Ihsan" className="page">
            Ihsan
          </NavLink>
          <NavLink to="Beka" className="page">
            Beka
          </NavLink>
          <NavLink to="ilim" className="page">
            Ilim
          </NavLink>
          <NavLink to="kursant" className="page">
            Kursant
          </NavLink>
          <NavLink to="chyngyz" className="page">
            Chyngyz
          </NavLink>
          <NavLink to="baary" className="page">
            Баары
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
