import { connect } from 'react-redux'
import React, { Component } from 'react'
import { changeMedia } from '../actions/index'

class YouTube extends Component {

  render(){
    const { media } = this.props
    const video_url = `https://www.youtube.com/embed/${media.data}`
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          width="560"
          height="315"
          src={ video_url }>
        </iframe>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { media } = state
  return media
}

export default connect(mapStateToProps)(YouTube)
