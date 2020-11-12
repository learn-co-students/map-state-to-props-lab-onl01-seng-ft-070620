import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users! {"\n"}
          Count: {this.props.count} {"\n"}
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  debugger
  return {users: state.users, count: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
