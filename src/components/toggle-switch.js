import React, { Component } from 'react'

export default class ToggleSwitch extends Component {

  render() {
    const isChecked = this.props.checked == 'true'
    return (
      <label className="switch">
        <input type="checkbox" defaultChecked={isChecked} />
        <span className="slider round"></span>
      </label>
    )
  }
}
