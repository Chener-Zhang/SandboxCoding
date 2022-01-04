import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Home from "./RouterTest/Home";
import About from "./RouterTest/About";
import Contact from "./RouterTest/Contact";

export default function App() {
  return (
    <div className="App">
      <h1>welcome</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
