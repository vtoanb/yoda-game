import React, {Component} from 'react'
import YouTube from './video'
import Thumbnails from './thumbnails'

class Gallary extends Component {
  render() {
    const thumbnails = [
      {type: 'video', data: "2-KXXMsJWoo"},
      {type: 'video', data: "vCebXPSduZ4"},
      {type: 'video', data: "JpDi_cqDLfE"}]
    return (
      <div>
        <YouTube video_id="2-KXXMsJWoo"/>
        <Thumbnails thumbnails={thumbnails}/>
      </div>
    )
  }
}

export default Gallary
