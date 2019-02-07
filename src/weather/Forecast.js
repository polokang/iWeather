import React from "react";


function Row(props) {
  const { day, unit } = props;
  return (
    <div className="weather-forecast__row">
      <span className="weather-forecast__day">{`${day.day}`}</span>
      <span className="weather-forecast__icon">
        <i className="fa fa-clock-o" /> {`${day.time}`}
      </span>
      <span className="weather-forecast__high">{`${day.high.C} ${unit}`}</span>
      <span className="weather-forecast__low">{`${day.low.C} ${unit}`}</span>
    </div>
  )
}


export default function Forecast(props) {
  const { data, unit } = props;
  return (
    <section className="weather-forecast">
      <div className="forecast__switch">
        <button className="forecast__switch_0 switch-active">5 items</button>
        <button className="forecast__switch_1">10 items</button>
      </div>

      {data.map((day, index) => { return <Row key={`${index}`} day={day} unit={unit} /> })}

    </section>
  );
}


