import { combineReducers } from "redux";

import weatherReducer from "./weatherReducer";
import optionReducer from "./optionReducer"

export default combineReducers({
    weatherData: weatherReducer,
    options: optionReducer
})