import React, { Component } from 'react'
import { Link, Route, Router, browserHistory } from 'react-router'
import ToggleButton from './toggle-button'

class NavBar extends Component {
  render(){
    return(
      <div>
        <nav className="navbar  navbar-light bg-faded">
          <ul className="nav navbar-nav clearfix">
            <li className="nav-item">
              <ToggleButton />
            </li>
          </ul>
          <div className="collapse navbar-toggleable-xs" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand">Home</Link>
            <ul className="nav navbar-nav clearfix">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
