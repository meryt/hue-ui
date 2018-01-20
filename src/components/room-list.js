import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomsSelector from '../selectors/rooms'
import * as actions from '../actions'

class RoomList extends Component {
  componentWillMount() {
    this.props.fetchGroups()
  }

  renderRoom(room) {
    return (
      <li className="list-group-item" key={room.id}>
        {room.name}
      </li>
    )
  }

  render() {
    return (
      <ul className="room-list list-group">
        {this.props.rooms.map(this.renderRoom)}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { rooms: RoomsSelector(state) }
}

export default connect(mapStateToProps, actions)(RoomList)
