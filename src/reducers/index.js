import { combineReducers } from 'redux'
import groupsReducer from './groups'
import lightsReducer from './lights'

const rootReducer = combineReducers({
  groups: groupsReducer,
  lights: lightsReducer
})

export default rootReducer
