import "./styles/App.css";
import Randomizer from "./components/Randomizer";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggler";

function App() {
  return (
    <>
      
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <ModeToggle />
          <Router>
            <Routes>
              <Route exact path="/" element={<Randomizer />} />
            </Routes>
          </Router>
      </ThemeProvider>
      
    </>
  );
}

export default App;
