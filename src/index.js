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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
