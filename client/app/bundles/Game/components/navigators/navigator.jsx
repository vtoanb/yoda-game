import React from 'react';
import SystemPicker from './system-picker';
import CategoryPicker from './category-picker';
import css from './navigator.scss';

class Navigator extends React.Component {
  render(){
    return(
      <div>
        <SystemPicker />
        <CategoryPicker />
      </div>
    );
  }
}

export default Navigator;