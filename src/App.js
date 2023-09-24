import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import Section from "./components/Section/Section";
import NevidevsProjects from "./components/ NevidevsProjects/NevidevsProjects";
import OurPartners from "./components/OurPartners/OurPartners";
import ReviewClients from "./components/ReviewClients/ReviewClients";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Section />
      <NevidevsProjects />
      <OurPartners />
      <ReviewClients/>
      <Footer />
    </div>
  );
}

export default App;
