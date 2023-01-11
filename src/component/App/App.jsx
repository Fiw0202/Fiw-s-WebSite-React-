import { useState } from "react";
import "./App.css";
import NavBar from "../Navbar/NavBar";
import Personal from "../Personal/Personal";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Personal/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
