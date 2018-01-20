import { combineReducers } from 'redux'
import groupsReducer from './groups'

const rootReducer = combineReducers({
  groups: groupsReducer
})

export default rootReducer
