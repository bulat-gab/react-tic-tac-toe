import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Game from "./Game";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
    </BrowserRouter>
  );
}

export default App;
