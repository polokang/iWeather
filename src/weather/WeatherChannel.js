import React from "react";

import CityCondition from "./CityCondition";
import Forecast from "./Forecast";
import Toolbar from "./Toolbar"

export default class WeatherChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: {
        city: "Brisbane, Au",
        humidity: 62,
        windSpeed: 9,
        windDirection: "NS",
        temp: { C: 26, F: 70 }
      },
      forecast: [
        {
          day: "Fri",
          time: "13:00",
          high: { C: 30, F: 80 },
          low: { C: 20, F: 60 }
        },
        {
          day: "Fri",
          time: "13:00",
          high: { C: 30, F: 80 },
          low: { C: 20, F: 60 }
        }
      ],
      unit: "F"
    };
  }

  switchTemp() {
    if (this.state.unit === "C") {
      this.setState({ unit: "F" })
    } else {
      this.setState({ unit: "C" })
    }
  }

  render() {
    const { condition, forecast, unit } = this.state;
    return (
      <React.Fragment>
        <Toolbar unit={unit} switchTemp={() => { this.switchTemp() }} />
        <main>
          <CityCondition data={condition} unit={unit} />
          <Forecast data={forecast} unit={unit} />
        </main>
      </React.Fragment>
    );
  }
}
