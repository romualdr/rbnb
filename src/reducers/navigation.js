import housingList from '../data/housings.json'
import actions from '../actions'

export default function (state = { currentScreen: 'list', screenParams: {} }, { type, ...action }) {
    switch (type) {
        case actions.navigation.GO_TO_LIST:
            return { currentScreen: 'list', screenParams: action.screenParams }
            break;
        case actions.navigation.GO_TO_DETAIL:
            return { currentScreen: 'detail', screenParams: action.screenParams }
        default:
            break;
    }
    return state
}