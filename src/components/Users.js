import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'


class Users extends Component {

  iterateUsers = () => {
    return this.props.users.map(u => {
      return <li>{u.username}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          Users! - {this.props.userCount}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {/* {console.log(this.props)} */}
          {this.iterateUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);
