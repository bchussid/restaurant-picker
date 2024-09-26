import "./styles/App.css";
import Randomizer from "./components/Randomizer";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Randomizer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
