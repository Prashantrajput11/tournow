import React, { useState } from "react";
import ReactDOM from "react-dom";
import tourDB from "./tours.js";
import "./style.css";

const App = function () {
  var countries = Object.keys(tourDB);
  const [selectedCountry, setSelectedCountry] = useState("India");
  function tourClickHandler(country) {
    setSelectedCountry(country);
  }

  return (
    <div className="main">
      <div className="top-header">
        <h1>
          ✈️Tour<span className="primary-text">Now</span>
        </h1>
        <h2>
          {" "}
          Checkout My Favourite Tours. Select One To Begin Your World Journey
        </h2>
      </div>
      <div className="showCountries">
        {countries.map(function (country) {
          return (
            <button className="btns" onClick={() => tourClickHandler(country)}>
              {country}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="showCity">
        <ul className="navitem">
          {tourDB[selectedCountry].map(function (city) {
            return (
              <li className="item" key={city.name}>
                <div>City : {city.name}</div>
                <div>Price : {city.price}</div>
                <div>Rating : {city.rating}</div>
                <div className="image-data">
                  <img src={city.image}></img>

                  </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
      <footer id="footer">
      <ul class="social">
        <li>
          <a href="https://twitter.com/code_prash"
            >Twitter <i class="icons fab fa-twitter-square"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/prashant-tanwar-302571179/"
            >Linkedin <i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/Prashantrajput11/tournow"
            >Github<i class="icons fab fa-github"></i
          ></a>
        </li>
      </ul>
    </footer>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
