// Reselect selector
// Takes a list of groups and picks out the ones that are rooms
import _ from 'lodash'
import { createSelector } from 'reselect'

// Create select functions to pick off pieces of state we care about
const groupsSelector = state => state.groups

const getRooms = (groups) => {
  return _.filter(
    groups,
    group => group.type == 'Room'
  )
}

export default createSelector(
  groupsSelector,
  getRooms
)
