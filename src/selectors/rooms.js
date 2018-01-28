// Reselect selector
// Takes a list of groups and picks out the ones that are rooms
import _ from 'lodash'
import { createSelector } from 'reselect'

// Create select functions to pick off pieces of state we care about
const groupsSelector = state => state.groups

const getGroupsOfType = (groupType) => {
  return (groups) => {
    return _.filter(
      groups,
      group => group.type == groupType
    )
  }
}

const RoomsSelector = createSelector(
  groupsSelector,
  getGroupsOfType('Room')
)

const LightGroupsSelector = createSelector(
  groupsSelector,
  getGroupsOfType('LightGroup')
)

export { RoomsSelector, LightGroupsSelector }
