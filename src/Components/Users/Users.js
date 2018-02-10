import React from 'react'
import User from './User/User'

const users = (props) => (
  <ul>
    {
      props.users.map((user) => {
        return (
          <User
            key={user.id}
            user={user}/>
        )
      })
    }
  </ul>
)

export default users
