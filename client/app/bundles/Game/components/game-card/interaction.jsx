import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import css from './interaction.scss';

export default class InteractiveBar extends Component {
  render(){
    return(
      <ul className="interaction-bar table-row">
        <li>
          <a href='#'>
            <FontAwesome name="share-alt" size="lg" />
            <span>share</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesome name="bookmark" size="lg" />
            <span>save</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesome name="heart" size="lg" />
            <span>likes</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesome name="download"  size="lg" />
            <span>download</span>
          </a>
        </li>
      </ul>
    );
  }
}