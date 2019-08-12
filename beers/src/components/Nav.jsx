import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-primary">
          
          <Link className="navbar-brand" to='/'>
            <img className="icon-home" src="/img/home-icon.png" alt="Home icon"/>
          </Link>

          {localStorage.user ?

            <div>

              <Link className="text-white nav-menu-link" to='/profile'>
                Profile
              </Link>
              <Link className="text-white nav-menu-link" to='/auth/logout'>
                Log Out
              </Link>
            </div>

            :
            <div>
              <Link className="text-white nav-menu-link" to='/auth/login'>
                Log In
              </Link>

              <Link className="text-white nav-menu-link" to='/auth/signup'>
                Sign Up
              </Link>
            </div>

            }

        </nav>
    )
  }
}


export default Nav;
