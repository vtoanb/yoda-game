import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class CategoryPicker extends Component {
  render() {
    return (
      <div>
        <h3>
          CATEGORY
          <FontAwesome name="caret-up" className="float-right"/>
        </h3>
        <ul className="game-category nav">
          <li className="nav-item">Action</li>
          <li className="nav-item">Adventure</li>
          <li className="nav-item">Arcade</li>
          <li className="nav-item">Board</li>
          <li className="nav-item">Card</li>
          <li className="nav-item">Casino</li>
          <li className="nav-item">Casual</li>
          <li className="nav-item">Educational</li>
          <li className="nav-item">Music</li>
          <li className="nav-item">Puzzle</li>
          <li className="nav-item">Racing</li>
          <li className="nav-item">Role-Playing</li>
          <li className="nav-item">Simulation</li>
          <li className="nav-item">Sport</li>
          <li className="nav-item">Strategy</li>
          <li className="nav-item">Trivia</li>
          <li className="nav-item">World</li>
        </ul>
      </div>
    );
  }
}

export default CategoryPicker;
