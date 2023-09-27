import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NevidevsProjects from "./components/ NevidevsProjects/NevidevsProjects";
import OurPartners from "./components/OurPartners/OurPartners";
import ReviewClients from "./components/ReviewClients/ReviewClients";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Directions from "./components/Directions/Directions";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Header modal={modal} setModal={setModal} />
      <Home setModal={setModal} />
      <Directions />
      <NevidevsProjects />
      <OurPartners />
      <ReviewClients />
      <Footer />
    </div>
  );
}

export default App;
