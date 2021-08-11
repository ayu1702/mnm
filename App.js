import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import Death from "./MyComponents/Death";
import Chars from "./MyComponents/Chars";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <h1>THE BREAKING BAD API</h1>
          <p>Now with Better Call Saul Data!</p>
          
          <hr />
         
          <Chars/>


          <hr />
          <Death />
          <hr />
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
