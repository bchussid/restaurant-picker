import "./App.css";
import Randomizer from "./components/Randomizer";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
      <main className="dark:bg-slate-800">

      <MoonIcon className="h-10 w-10 dark:text-slate-100" onClick={() => setDarkMode(!darkMode)} />
      <Randomizer />
      </main>
    </div>
    </>
  );
}

export default App;
