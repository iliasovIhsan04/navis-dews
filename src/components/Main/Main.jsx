import React from "react";
import "./Main.css";
import Home from "../Home/Home";
import Section from "../Section/Section";
import NevidevsProjects from "../ NevidevsProjects/NevidevsProjects";
const Main = () => {
  return (
    <div className="main">
        <Home />
        <Section/>
        <NevidevsProjects/>
    </div>
  );
};

export default Main;
