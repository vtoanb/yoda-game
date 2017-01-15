import React from 'react';
import FontAwesome from 'react-fontawesome';

const SystemPicker = (props) => {
  return(
    <div>
      <h3>
        CHOOSE OS
        <FontAwesome name="" />
      </h3>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesome name="android" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FontAwesome name="apple" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SystemPicker;