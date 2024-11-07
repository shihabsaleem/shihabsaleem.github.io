// App.js

import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import NavMobile from "./Components/NavMobile";
import { useState } from "react";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Router>
        <div className="hidden md:block md:absolute md:top-0 md:left-0 md:z-20 ">
          <Navbar />
        </div>
        <div className="md:hidden block">
          {/* Animate the appearance of NavMobile */}
          <div
            className={`${
              isNavOpen ? "scale-100" : "scale-50 "
            } transition-transform transform duration-300 origin-top`}
          >
            {isNavOpen && <NavMobile toggleNav={toggleNav} />}
          </div>

          <div className="p-8 w-screen flex flex-row justify-between absolute z-20">
            <Link to={"/"} className="text-xl lg:text-3xl">
              Shihab<span className="text-PaleOrange">.</span>
            </Link>
            <div onClick={toggleNav} className="text-xl lg:text-3xl ">
              {isNavOpen ? "Close" : "Menu"}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
