import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import Projects from "./components/MyProjects/index";
function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
