import React, { Component } from 'react'
import YouTube from './video'
import Thumbnails from './thumbnails'
import './gallary.scss'
// 2-KXXMsJWoo
class Gallary extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const thumbnails = [
      {type: 'video', data: "2-KXXMsJWoo"},
      {type: 'video', data: "vCebXPSduZ4"},
      {type: 'video', data: "JpDi_cqDLfE"}]

    const prefix = `http://res.cloudinary.com/dgwgbnszx/image/upload/c_scale,w_60/v1484478878/game-project/`

    return (
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-7"><YouTube  video_id="2-KXXMsJWoo"/></div>
          <div className="col-lg-3">
            <ul className="table-row">
              <li className="table-cell">
                <img src={ prefix + 'tap-tap-dash'}/>
              </li>
              <li className="table-cell">
                <span className="d-block game-title">Tap tap dash</span>
                <span className="d-block game-publisher">ABC Coperation</span>
              </li>
            </ul>
          </div>
        </div>
        <div><Thumbnails thumbnails={thumbnails}/></div>
      </div>
    )
  }
}

export default Gallary
