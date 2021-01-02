import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Hero from "./components/Hero";
// import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
// import { InfoData } from "./data/InfoData";
// import { InfoDataTwo } from "./data/InfoData";
// import { InfoDataThree } from "./data/InfoData";
// import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Home from "./pages";
import Fire from "./pages/Fire";
import Maestro from "./pages/Maestro";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />

      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Hero slides={SliderData} /> */}
      {/* <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/fire" component={Fire} />
        <Route path="/maestro" component={Maestro} />
      </Switch>

      <Redirect to="/"></Redirect>
    </>
  );
}

export default App;
