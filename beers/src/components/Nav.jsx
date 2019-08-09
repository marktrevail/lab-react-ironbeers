import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-primary">
          
          <Link className="navbar-brand" to='/'>
            <img class="icon-home" src="/img/home-icon.png" alt="Home icon"/>
          </Link>

        </nav>
    )
  }
}


export default Nav;
