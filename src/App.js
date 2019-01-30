import React, { Component } from "react";
import "./styles/main.css";

import Header from "./weather/Header";
import Footer from "./weather/Footer";
import WeatherChannel from "./weather/WeatherChannel";

class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />

        <WeatherChannel />

        <Footer />
      </div>
    );
  }
}

export default App;
