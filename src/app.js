import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShortenerPage from "./pages/shortenerPage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Shortener</Link> |{" "}
        <Link to="/stats">Stats</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
