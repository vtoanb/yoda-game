import React from 'react';
import FontAwesome from 'react-fontawesome';

const SystemPicker = (props) => {
  return(
    <div>
      <h3>
        Choose OS
        <FontAwesome name="" />
      </h3>
      <ul>
        <li>
          <a href="#">
            <FontAwesome name="android" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesome name="apple" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SystemPicker;