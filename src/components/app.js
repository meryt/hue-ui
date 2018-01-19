import React, { Component } from 'react';
import NavBar from './navbar'
import RoomList from './room-list'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <RoomList />
      </div>
    )
  }
}
