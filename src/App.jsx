import "./App.css";
import Randomizer from "./components/Randomizer";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  //todo: only toggles if in lightmode is user setting, does nothing if user setting is darkmode
  // {darkMode ? "dark" : ""}
  return (
    <>
      <main className="min-h-screen">
        <div className="dark:bg-slate-800">
          {/* <MoonIcon
            className="h-10 w-10 dark:text-slate-100"
            onClick={() => setDarkMode(!darkMode)}
          /> */}
          <ThemeSwitcher />
          <Randomizer />
        </div>
      </main>
    </>
  );
}

export default App;
