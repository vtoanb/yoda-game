import React, { Component } from 'react'
import { Link } from 'react-router'
import ToggleButton from './toggle-button'
import './navbar.scss'

class NavBar extends Component {
  render(){
    return(
      <div>
        <nav className="navbar container">
          <ul className="nav navbar-nav clearfix">
            <li className="nav-item">
              <ToggleButton />
            </li>
          </ul>
          <div className="collapse navbar-toggleable-xs" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand">Home</Link>
            <ul className="nav navbar-nav clearfix">
              <li className="nav-item">
                <Link to="/games" className="nav-link">CATEGORY</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">COLLECTION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">VIDEO</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
