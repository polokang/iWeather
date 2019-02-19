import React from "react"
import { connect } from "react-redux"
import { CHANGE_CITY, CHANGE_TEMP_UNIT } from "../actions/ActionTypes";

function Toolbar(props) {
    const { curCity, unit } = props;
    return (
        <nav>
            <div style={{ flex: 1 }}>
                <input className="search-input" />
                <button className="search-btn"><i className="fa fa-search"></i></button>

                <button className="temp-switch" onClick={() => unit === 'C' ?
                    props.switchTempUnit('F') : props.switchTempUnit('C')
                }>{unit}
                </button>
            </div>
        </nav>
    )
}


const mapStateToProps = dispatch => ({
    switchTempUnit: (unit) => {
        console.log(unit);
        dispatch({
            type: CHANGE_TEMP_UNIT,
            unit: unit
        })
    }
})


export default connect(null, mapStateToProps)(Toolbar);