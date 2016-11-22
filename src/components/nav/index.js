import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/signin">SignIn</Link></li>
        </ul>
      </div>
    )
  }
})
