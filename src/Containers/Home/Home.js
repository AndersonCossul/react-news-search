import React, { Component } from 'react'
import axios from 'axios'
import Users from '../../Components/Users/Users'

class Home extends Component {
  state = {
    users: null,
    hasError: false
  }

  getUsers () {
    axios.get('https://reqres.in/api/users')
      .then((response) => {
        this.setState({users: response.data.data})
      })
      .catch((error) => {
        this.setState({hasError: true})
      })
  }

  componentDidMount () {
    this.getUsers()
  }

  render () {
    let users = <p>Loading...</p>

    if (this.state.hasError) {
      users = <p>There was an error when getting the users.</p>
    }

    if (this.state.users) {
      if (this.state.users.length) {
        users = <Users users={this.state.users} />
      } else {
        users = <p>No user was found!</p>
      }
    }

    return (
      <div>
        {users}
      </div>
    )
  }
}

export default Home
