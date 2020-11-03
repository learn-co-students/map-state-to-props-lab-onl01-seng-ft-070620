import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let renderedUsers = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
        <ul>
          Users!
          {renderedUsers}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
