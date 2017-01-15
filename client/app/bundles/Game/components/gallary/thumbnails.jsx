// list of video and picture
// @props.thumbnails = [{type: image, url=""}]
// @props.thumbnails = [{type: video, id=""}]
// https://img.youtube.com/vi/2-KXXMsJWoo/0.jpg

import React from 'react'
import css from './gallary.scss'

const Thumbnails = (props) => {
  const displayThumbnail = props.thumbnails.map(
    thumbnail => {
      if(thumbnail.type != "video") {
        return(
          <li key={thumbnail.data}>
            <img src={thumbnail.data} />
          </li>
        )
      }
      return(
        <li key={thumbnail.data}>
          <img src={`https://img.youtube.com/vi/${thumbnail.data}/0.jpg`}/>
        </li>
      )
    })
  return (
      <ul className="game-thumbnails">{displayThumbnail}</ul>
  )
}

export default Thumbnails