import { combineReducers } from 'redux'

import housings from './housings'
import { reducer as formReducer } from 'redux-form'
// import navigation from './navigation'

export default combineReducers({
    housings,
    form: formReducer
    // navigation
})