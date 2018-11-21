import housingList from '../data/housings.json'
import actions from '../actions'

const defaultState = {
    list: [],
    details: null,
    status: actions.housings.HOUSING_LIST_NEW,
    city: null
}

export default function (state = defaultState, { type, ...action }) {
    switch (type) {
        case actions.housings.HOUSING_STATUS_UPDATE:
            return { ...state, status: action.status }
        case actions.housings.HOUSING_LIST_COMPLETE:
            return { ...state, list: action.housings, details: null, status: action.status, city: action.city }
            break;
        case actions.housings.HOUSING_DETAILS_COMPLETE:
            return { ...state, details: action.housing }
        default:
            break;
    }
    return state
}