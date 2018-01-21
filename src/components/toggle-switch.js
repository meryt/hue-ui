import React, { Component } from 'react'

export default class ToggleSwitch extends Component {

  render() {
    if (this.props.checked == 'true') {
      return (
        <label className="switch">
          <input type="checkbox" defaultChecked="checked" />
          <span className="slider round"></span>
        </label>
      )
    } else {
      return (
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      )
    }
  }
}
