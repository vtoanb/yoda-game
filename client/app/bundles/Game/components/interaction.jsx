import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import css from 'interaction.scss';

export default class InteractiveBar extends Component {
  render(){
    return(
      <ul>
        <li>
          <a href='#'>
            <FontAwesome name="download" />
            <span>download</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesome name="share-alt" />
            <span>share</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className="fa fa-bookmark"/>
            <span>save</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className="fa fa-heart"/>
            <span>likes</span>
          </a>
        </li>
      </ul>
    );
  }
}