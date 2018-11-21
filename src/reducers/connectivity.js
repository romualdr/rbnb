import actions from '../actions'

const defaultState = {
    status: actions.connectivity.CONNECTIVITY_STATUS_UNKNOWN
}

export default (state = defaultState, { type, ...action }) => {
    switch (type) {
        case actions.connectivity.CONNECTIVITY_UPDATE:
            return { ...state, status: action.status}
        default:
            break;
    }
    return state
}