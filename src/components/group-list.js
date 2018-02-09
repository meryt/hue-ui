import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomsSelector, LightGroupsSelector } from '../selectors/groups'
import * as actions from '../actions'
import ToggleSwitch from './toggle-switch'
import Badge from './badge'
import GroupWithLights from './group-with-lights'

class GroupList extends Component {
  countLitLightsInGroup(group, allLights = {}) {
    return _.filter(group.lights, lightId => (
      typeof(allLights[lightId]) !== 'undefined' && allLights[lightId].state.on)
    ).length
  }

  countUnlitLightsInGroup(group, allLights = {}) {
    return _.filter(group.lights, lightId => (
      typeof(allLights[lightId]) === 'undefined' || !(allLights[lightId].state.on))
    ).length
  }

  renderGroup(group, lights) {
    return (
      <div className="card" key={group.id}>
        <div className="card-header list-group-item d-flex justify-content-between align-items-center">
          {group.name}
          <div className="light-badge-toggle d-flex align-items-center">
            <Badge suppressible="true" colorClass="warning" count={this.countLitLightsInGroup(group, this.props.lights)} />
            <Badge suppressible="false" colorClass="dark" count={this.countUnlitLightsInGroup(group, this.props.lights)} />
            <ToggleSwitch checked={group.state.any_on ? 'true' : 'false'} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div className="group-list list-group">
          {this.props.groups.map(this.renderGroup.bind(this))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let selector
  switch (ownProps.type) {
    case 'Room':
      selector = RoomsSelector
      break
    case 'LightGroup':
      selector = LightGroupsSelector
      break
    default:
      console.log(`Unknown group type ${ownProps.type}; defaulting to Room`)
      selector = RoomsSelector
      break
  }

  return {
    // Filter main groups list to include only groups of a particular type
    groups: selector(state),
    lights: state.lights
   }
}

export default connect(mapStateToProps, actions)(GroupList)
