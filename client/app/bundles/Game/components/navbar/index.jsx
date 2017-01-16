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
            <Link to="/" className="navbar-brand">
              <img src="http://res.cloudinary.com/dgwgbnszx/image/upload/c_scale,w_60/v1484482405/game-project/leo-fortune.webp" />
            </Link>
            <ul className="nav navbar-nav clearfix">
              <li className="nav-item nav-item-padding">
                <Link to="/games" className="nav-link">CATEGORY</Link>
              </li>
              <li className="nav-item nav-item-padding">
                <a className="nav-link" href="#">COLLECTION</a>
              </li>
              <li className="nav-item nav-item-padding">
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
