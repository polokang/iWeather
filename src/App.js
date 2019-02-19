import React, { Component } from "react";
import "./styles/main.css";
import { Provider } from "react-redux";
import store from "./store"

import Header from "./weather/Header";
import Footer from "./weather/Footer";
// import WeatherChannel from "./weather/WeatherChannel";
import WeatherRedux from "./weather/WeatherRedux"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="weather-channel__container">
          <Header />
          {/* <WeatherChannel /> */}
          <WeatherRedux />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
