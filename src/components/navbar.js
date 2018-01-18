import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img src="/images/petalwheel.svg" height="32" className="d-inline-block align-top" alt=""/>
          <div className="d-inline-block">HueUI</div>
        </Link>
      </nav>
    )
  }
}
