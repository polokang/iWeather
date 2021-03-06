import React from "react"

export default function Toolbar(props) {
    const { unit, curCity, switchTemp, switchCity, searchWeather } = props;
    return (
        <nav>
            <div style={{ flex: 1 }}>
                <input className="search-input" value={curCity} onChange={switchCity} />
                <button className="search-btn" onClick={searchWeather}><i className="fa fa-search"></i></button>

                <button className="temp-switch" onClick={switchTemp}>
                    <i className="fa fa-thermometer-empty"
                        aria-hidden="true"
                        style={{ paddingRight: 5 }} ></i>
                    <sup>&deg;</sup>{unit}
                </button>
            </div>
        </nav>
    )
}