import React, { Component } from "react";
import "./styles/main.css";

import Header from "./weather/Header";
import Footer from "./weather/Footer";
import Forecast from "./weather/Forecast";
import CityCondition from "./weather/CityCondition";

const data = {
  city: "Brisbane, Au",
  humidity: 62,
  windSpeed: 9,
  windDirection: "NS",
  temp: { C: 26, F: 70 }
};

const forecastData = [
  { day: "Fri", time: "13:00", high: { C: 30, F: 80 }, low: { C: 20, F: 60 } },
  { day: "Fri", time: "13:00", high: { C: 30, F: 80 }, low: { C: 20, F: 60 } }
];

class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <CityCondition data={data} />
        <Forecast data={forecastData} />
        <Footer />
      </div>
    );
  }
}

export default App;
