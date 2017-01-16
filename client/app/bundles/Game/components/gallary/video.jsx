import React from 'react'

const YouTube = (props) => {
  const { video_id } = props
  const video_url = `https://www.youtube.com/embed/${video_id}`
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

export default YouTube