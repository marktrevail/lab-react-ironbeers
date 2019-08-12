import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-primary">
          
          <Link className="navbar-brand" to='/'>
            <img className="icon-home" src="/img/home-icon.png" alt="Home icon"/>
          </Link>

          <Link className="text-white" to='/auth/signup'>
            Sign up
          </Link>


        </nav>
    )
  }
}


export default Nav;
