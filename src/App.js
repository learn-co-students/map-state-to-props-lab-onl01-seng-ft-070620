import React, { Component } from 'react'
import UserInput from './components/UserInput'
import Users from './components/Users'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <Users />
      </div>
    )
  }

}
