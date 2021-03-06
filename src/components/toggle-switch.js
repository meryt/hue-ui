import React, { Component } from 'react'

export default class ToggleSwitch extends Component {

  render() {
    const isChecked = this.props.checked == 'true'
    return (
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={e => this.props.onChange(e.target.checked, this.props.itemId)} />
        <span className="slider round"></span>
      </label>
    )
  }
}
