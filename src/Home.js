import React, { Component } from "react";
import tooth from "./tooth.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <img src={tooth} />
        <div className="home-details">
          <h1>Dentist Website</h1>
          <p>
            Our mission is to deliver the highest quality care, unprecedented
            comfort, and service. We’re committed to delivering the very best
            results for you, whether it’s:
          </p>
          <ul>
            <li>Creating the perfect smile</li>
            <li>Reconstructing your entire mouth</li>
            <li>Helping you achieve total wellness</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
