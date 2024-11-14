import React, { Component } from 'react'

export class UserList extends Component {
  render() {
    const {name, email} = this.props;
    return (
      <div> <h3>UserList</h3>
          <p>{name}</p>
          <p>{email}</p>
      </div>
    )
  }
}

export default UserList