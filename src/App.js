import "./App.css";
import React from "react";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Service from "./Components/Service/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import Testimonials from "./Components/Testimonials/Testimonials";




function App() {
  return (
    <div className="App">
      <AnimatedCursor
          innerSize={8}
          outerSize={16}
          color="255, 247, 244"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
        />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials/>
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
