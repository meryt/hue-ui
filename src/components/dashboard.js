import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomList from './room-list'
import RoomsSelector from '../selectors/rooms'
import * as actions from '../actions'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchGroups()
    this.props.fetchLights()
  }

  render() {
    return (
      <div className="dashboard">
        <RoomList />
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