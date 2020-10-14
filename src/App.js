import React, { useState, useEffect } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs.js";
import Header from './components/Header.js'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="App-content">
        <ListOfGifs />
      </section>
    </div>
  );
}

export default App;
