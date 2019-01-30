import React from "react";


function Row(data, unit) {
  return (
    <div className="weather-forecast__row">
      <span className="weather-forecast__day">{`${data.day}`}</span>
      <span className="weather-forecast__icon">
        <i className="fa fa-clock-o" /> {`${data.time}`}
      </span>
      <span className="weather-forecast__high">{`${data.high} ${unit}`}</span>
      <span className="weather-forecast__low">{`${data.low} ${unit}`}</span>
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

      {/* {data.map((day1, index) => { return <Row key={`${day1.weekday}_${index}`} day={day1} /> })} */}

      <div className="weather-forecast__row">
        <span className="weather-forecast__day">{data[0].day}</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o" /> {data[0].time}
        </span>
        <span className="weather-forecast__high">{`${data[0].high.C} ${unit}`}</span>
        <span className="weather-forecast__low">8 c</span>
      </div>

      <div className="weather-forecast__row">
        <span className="weather-forecast__day">Fri</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o" /> 16:00
        </span>
        <span className="weather-forecast__high">19 c</span>
        <span className="weather-forecast__low">8 c</span>
      </div>
    </section>
  );
}


