import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomsSelector from '../selectors/rooms'
import * as actions from '../actions'
import ToggleSwitch from './toggle-switch'
import Badge from './badge'

class RoomList extends Component {
  componentWillMount() {
    this.props.fetchGroups()
    this.props.fetchLights()
  }

  countLitLightsInRoom(room, allLights = {}) {
    return _.filter(room.lights, lightId => (
      typeof(allLights[lightId]) !== 'undefined' && allLights[lightId].state.on)
    ).length
  }

  countUnlitLightsInRoom(room, allLights = {}) {
    return _.filter(room.lights, lightId => (
      typeof(allLights[lightId]) === 'undefined' || !(allLights[lightId].state.on))
    ).length
  }

  renderRoom(room, lights) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center" key={room.id}>
        {room.name}
        <div className="light-badge-toggle d-flex align-items-center">
          <Badge suppressible="true" colorClass="warning" count={this.countLitLightsInRoom(room, this.props.lights)} />
          <Badge suppressible="false" colorClass="dark" count={this.countUnlitLightsInRoom(room, this.props.lights)} />
          <ToggleSwitch checked={room.state.any_on ? 'true' : 'false'} />
        </div>
      </li>
    )
  }

  render() {
    return (
      <div>
        <h3>Rooms</h3>
        <ul className="room-list list-group">
          {this.props.rooms.map(this.renderRoom.bind(this))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rooms: RoomsSelector(state),
    lights: state.lights
   }
}

export default connect(mapStateToProps, actions)(RoomList)
