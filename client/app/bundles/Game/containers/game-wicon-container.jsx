import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showGame, changeMedia } from '../actions/index'
import { browserHistory } from 'react-router'

class GameWIcon extends Component {
  handleClick() {
    const { id, thumbnail } = this.props
    this.props.changeMedia(thumbnail)
    browserHistory.push(`games/${id}`)
  }
  render(){
    const { icon, name } = this.props

    return (
      <div onClick={ ()=>{ this.handleClick() } }>
        <img className="card-img-top" src = { icon } />
        <p className="card-title">{ name }</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ changeMedia }, dispatch)
)

export default connect(null, mapDispatchToProps)(GameWIcon)
