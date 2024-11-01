import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home/> */}

      <Router>
      <div className="absolute top-0 left-0 z-50">
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
