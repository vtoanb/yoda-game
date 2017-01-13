import React from 'react'

const ToggleButton = () => {
  return (
    <button
      className="navbar-toggler hidden-sm-up nav-link"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  )
}

export default ToggleButton