import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showGame, changeMedia } from '../actions/index'
import { browserHistory } from 'react-router'

class GameWIcon extends Component {
  handleClick() {
    // Todo update game info to show
    this.props.showGame(this.props)
    this.props.changeMedia({})
    browserHistory.push('/games')
  }
  render(){
    const { game_icon_image, game_name } = this.props

    return (
      <div onClick={ ()=>{ this.handleClick() } }>
        <img className="card-img-top" src = { game_icon_image } />
        <p className="card-title">{ game_name }</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ changeMedia, showGame }, dispatch)
}

export default GameWIcon
