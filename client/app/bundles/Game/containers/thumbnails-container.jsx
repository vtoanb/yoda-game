import React, { Component } from 'react'
import css from '../components/gallary/gallary.scss'
import { connect } from 'react-redux'
import { changeMedia } from '../actions/index'
import { bindActionCreators } from 'redux'

class Thumbnails extends Component {
  constructor(props){
    super(props)
  }

  displayThumbnail = this.props.thumbnails.map(
    thumbnail => {
      if(thumbnail.media_type != "video") {
        return(
          <li
            onClick={ () => { this.props.changeMedia(thumbnail)} }
            key={thumbnail.data}>
            <img src={thumbnail.data} />
          </li>
        )
      }
      return(
        <li
          onClick={ () => { this.props.changeMedia(thumbnail)} }
          key={thumbnail.data}>
          <img src={`https://img.youtube.com/vi/${thumbnail.data}/0.jpg`}/>
        </li>
      )
    })

  render(){
    return (
        <ul className="game-thumbnails">{ this.displayThumbnail }</ul>
    )
  }
}


// map change media to thumbnail
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeMedia }, dispatch)
}

// select data from global state
const select = state => ({ media: state.media })

// change state=null -> media later
export default connect(select, mapDispatchToProps)(Thumbnails)