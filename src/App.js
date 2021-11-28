import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CountryDetail from "./pages/CountryDetail";
import { CountryProvider } from "./context/CountryContext";

const dark = {
  "--element": "hsl(209, 23%, 22%)",
  "--bg": "hsl(207, 26%, 17%)",
  "--input": "hsl(0, 0%, 52%)",
  "--text": "hsl(0, 0%, 100%)",
  height: "100%",
  width: "100%",
};

const light = {
  "--element": "hsl(0, 0%, 100%)",
  "--bg": "hsl(0, 0%, 98%)",
  "--input": "hsl(0, 0%, 52%)",
  "--text": "hsl(200, 15%, 8%)",
  height: "100%",
  width: "100%",
};

function App() {
  const { theme } = useTheme();
  return (
    <CountryProvider>
      <Router>
        <div style={theme === "light" ? light : dark}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country" element={<CountryDetail />} />
          </Routes>
        </div>
      </Router>
    </CountryProvider>
  );
}

export default App;
