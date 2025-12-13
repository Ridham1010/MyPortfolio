// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/Customcursor.jsx"; // <--- Import this
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import About from "./About.jsx";
function App() {
  return (
    <>
      <CustomCursor /> {/* <--- Add this at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;