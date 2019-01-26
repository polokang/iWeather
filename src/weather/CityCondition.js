import React from "react";

import iwind from "../images/icon-wind.png";
import iumberella from "../images/icon-umberella.png";
import icompass from "../images/icon-compass.png";

/**
 *
 * @param {*} props
 * data = {
 *  city : 'Brisbane, Au',
 *  humidity: 62,
 *  windSpeed: 9,
 *  windDirection: 'NS',
 *  temp: {C:26, F:70}
 * }
 */

export default function CityCondition(props) {
  const data = props.data;
  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{data.city}</div>
      <div style={{ textAlign: "center", fontSize: "14px" }}>Clear</div>
      <div className="weather-condition__temp">19 c</div>
      <div className="weather-condition__desc">
        <div>
          <img src={iumberella} alt="" />
          <span className="citem">20%</span>
        </div>
        <div>
          <img src={iwind} alt="" /> <span className="citem">3 km/h</span>
        </div>
        <div>
          <img src={icompass} alt="" /> <span className="citem">NE</span>
        </div>
      </div>
    </section>
  );
}
