import React ,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Section from "./components/Section/Section";
import NevidevsProjects from "./components/ NevidevsProjects/NevidevsProjects";
import OurPartners from "./components/OurPartners/OurPartners";
import ReviewClients from "./components/ReviewClients/ReviewClients";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Header modal={modal} setModal={setModal} />
      <Home setModal={setModal}/>
      <Section />
      <NevidevsProjects />
      <OurPartners />
      <ReviewClients/>
      <Modal/>
      <Footer />
    </div>
  );
}

export default App;
