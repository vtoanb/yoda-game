import React, { Component } from 'react'

class YouTube extends Component {
  constructor(props){
    super(props)
  }
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

export default YouTube