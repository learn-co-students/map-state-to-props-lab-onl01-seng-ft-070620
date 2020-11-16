import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div>
        <p>{this.props.userCount} total users.</p>
        <ul>
          {this.props.users.map(user => (
            <li>{user.username} - {user.hometown}</li>
          ))}
        </ul>
      </div>
    )
  }
  
}

// returning state data to share with the Users component
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// passing return val of mapStateToProps to Users component
export default connect(mapStateToProps)(Users)
