import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class CategoryPicker extends Component {
  render() {
    return (
      <div>
        <h3>
          Categories
          <FontAwesome name="caret-up" className="float-right"/>
        </h3>
        <ul className="game-category">
          <li>Action</li>
          <li>Adventure</li>
          <li>Arcade</li>
          <li>Board</li>
          <li>Card</li>
          <li>Casino</li>
          <li>Casual</li>
          <li>Educational</li>
          <li>Music</li>
          <li>Puzzle</li>
          <li>Racing</li>
          <li>Role-Playing</li>
          <li>Simulation</li>
          <li>Sport</li>
          <li>Strategy</li>
          <li>Trivia</li>
          <li>World</li>
        </ul>
      </div>
    );
  }
}

export default CategoryPicker;
