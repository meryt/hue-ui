import React, { Component } from 'react'
import { connect } from 'react-redux'
import GroupList from './group-list'

import * as actions from '../actions'

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchGroups()
    this.props.fetchLights()
  }

  render() {
    return (
      <div className="dashboard">
        <GroupList type="Room" title="Rooms" />
        <GroupList type="LightGroup" title="Groups" />
      </div>
    )
  }
}


export default connect(null, actions)(Dashboard)
