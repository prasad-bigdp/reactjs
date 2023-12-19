import React, { Component } from "react";
import {BrowserRouter,Route,Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import backgroundImage from "../src/bg.png";
import Dashboard from "./components/layout/Dashboard";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Router>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Router>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
