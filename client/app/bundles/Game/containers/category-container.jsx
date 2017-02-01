import React, {Component} from 'react'
import { connect } from 'react-redux'
// import axios from 'axios'

import Collection from '../components/collection'

import { HOST } from '../const'

const mapStateToProps = (state) => ({})

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = { games: {} }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Category