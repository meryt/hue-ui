import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomsSelector from '../selectors/rooms'
import * as actions from '../actions'
import ToggleSwitch from './toggle-switch'

class RoomList extends Component {
  componentWillMount() {
    this.props.fetchGroups()
  }

  renderRoom(room) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center" key={room.id}>
        {room.name}
        <div className="light-badge-toggle d-flex align-items-center">
          <span className="badge badge-light badge-pill">2</span>
          <span className="badge badge-dark badge-pill">0</span>
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
          {this.props.rooms.map(this.renderRoom)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { rooms: RoomsSelector(state) }
}

export default connect(mapStateToProps, actions)(RoomList)
