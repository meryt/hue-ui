import React, { Component } from 'react';
import NavBar from './navbar'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <div className="hello">Hello World</div>
      </div>
    )
  }
}
