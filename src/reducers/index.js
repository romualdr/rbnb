import { combineReducers } from 'redux'

import housings from './housings'
import connectivity from './connectivity'
import { reducer as formReducer } from 'redux-form'
// import navigation from './navigation'

export default combineReducers({
    housings,
    connectivity,
    form: formReducer
    // navigation
})