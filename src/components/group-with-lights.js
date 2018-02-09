import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import ToggleSwitch from './toggle-switch'
import Badge from './badge'

class GroupWithLights extends Component {
  render() {
    return (
      <span />
    )
  }
}

export default connect(null, null)(GroupWithLights)
