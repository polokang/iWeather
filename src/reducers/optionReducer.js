import { CHANGE_CITY, CHANGE_TEMP_UNIT } from "../actions/ActionTypes";
const initialState = {
    unit: "F",
    curCity: ""
}

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return { ...state, };
        case CHANGE_TEMP_UNIT:
            return { ...state, unit: action.unit };
        default:
            return state;
    }
}

export default optionsReducer;