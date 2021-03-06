import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomsSelector, LightGroupsSelector } from '../selectors/groups'
import { toggleGroup, toggleLight, fetchGroups, fetchLights } from '../actions'
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

  toggleGroup(isTurningOn, groupId) {
    this.props.toggleGroup(groupId, isTurningOn)
  }

  toggleLight(isTurningOn, lightId) {
    console.log('Light ' + lightId + ' will turn ' + (isTurningOn ? 'on' : 'off'))
    this.props.toggleLight(lightId, isTurningOn)
  }

  clickCard(e) {
    //e.preventDefault();
    var card = e.target
    console.log('Clicked group ' + card.id.replace('card-group-', ''))
  }

  renderLightRow(lightId) {
    let light = this.props.lights[lightId]
    if (!light) return
    return (
      <li key={'light-' + lightId} className="list-group-item d-flex justify-content-between align-items-center">
        { light.name }
        <div className="light-badge-toggle">
          <ToggleSwitch checked={light.state.on ? 'true' : 'false'} onChange={this.toggleLight.bind(this)} itemId={lightId} />
        </div>
      </li>
    )
  }

  renderGroup(group) {
    if (!group) {
      return
    }
    return (
      <div className="card" key={ 'group-' + group.id}>
        <div className="card-header list-group-item d-flex justify-content-between align-items-center"
            id={ 'card-group-' + group.id }
            onClick={this.clickCard}>
          {group.name}
          <div className="light-badge-toggle d-flex align-items-center">
            <Badge suppressible="true" colorClass="warning" count={this.countLitLightsInGroup(group, this.props.lights)} />
            <Badge suppressible="false" colorClass="dark" count={this.countUnlitLightsInGroup(group, this.props.lights)} />
            <ToggleSwitch checked={group.state.any_on ? 'true' : 'false'} onChange={this.toggleGroup.bind(this)} itemId={group.id} />
          </div>
        </div>
        <div>
          <ul className="list-group list-group-flush">
            { group.lights.map(this.renderLightRow.bind(this)) }
          </ul>
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

const mapDispatchToProps = (dispatch) => ({
    toggleGroup: (groupId, isTurningOn) => {
      dispatch(toggleGroup(groupId, isTurningOn))
      dispatch(fetchLights())
      dispatch(fetchGroups())
    },
    toggleLight: (lightId, isTurningOn) => {
      dispatch(toggleLight(lightId, isTurningOn))
      dispatch(fetchGroups())
      dispatch(fetchLights())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
