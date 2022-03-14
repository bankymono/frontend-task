import { GET_DASHBOARD_DATA } from "./constants"

export const dashboardDataReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_DASHBOARD_DATA:
            return {  dboardData: action.payload }
        default:
            return state;
    }
}