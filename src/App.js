import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import Snap from "./components/Snap";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Snap">
            <Snap />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}