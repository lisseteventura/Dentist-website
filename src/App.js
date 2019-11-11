import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Procedure from "./Procedure";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/" className="link">
            Home
          </Link>{" "}
          <Link to="/Procedure" className="link">
            Procedures
          </Link>{" "}
          <Link to="/contact" className="link">
            Contact
          </Link>
        </nav>
        <Route exact path="/" exact component={Home} />
        <Route path="/procedure" exact component={Procedure} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
