import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Berries from "./components/Berries";
import Pokemon from "./components/Pokemon";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Nav />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/berries" element={<Berries />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
