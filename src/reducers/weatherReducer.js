import { CHANGE_CITY, CHANGE_TEMP_UNIT } from "../actions/ActionTypes";
const initialState = {
    condition: {
        city: "Brisbane, Au",
        humidity: 62,
        windSpeed: 9,
        windDirection: "NS",
        temp: { C: 26, F: 70 }
    },
    forecast: [
        {
            day: "Thu",
            time: "12:00",
            high: { C: 35, F: 85 },
            low: { C: 25, F: 65 }
        },
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
        },
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
    ]
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default weatherReducer;