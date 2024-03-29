import React, { Component } from "react";

import toothtwo from "./toothtwo.png";

class Procedure extends Component {
  render() {
    return (
      <div className="container">
        <div className="procedure-details">
          <h1>Procedures</h1>

          <p>
            Here at Dentist Office we provide a wide variety of procedures. We
            accept all sorts of insurance and have competitive uninsured payment
            plans. Find the service you need and visit our contact page to find
            out how to reach out to us to make the appointment you need!
          </p>

          <ul>
            <li>General Checkups</li>
            <li>Teeth Cleaning</li>
            <li>Cavity Screenings</li>
            <li>Cavity Fillings</li>
            <li>Chipped Tooth Fixings</li>
            <li>Tooth Removal</li>
            <li>Root Canals</li>
          </ul>
        </div>
        <img src={toothtwo} />
      </div>
    );
  }
}

export default Procedure;
