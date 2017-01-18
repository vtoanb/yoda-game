import React, { Component } from 'react'
import YouTube from './video'
import Thumbnails from '../../containers/thumbnails-container'
import './gallary.scss'
import { connect } from 'react-redux'

class Gallary extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const { media, games, id } = this.props
    const game = games.find(game => (game.id == id))
    return (
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-7"><YouTube media={ media }/></div>
          <div className="col-lg-3">
            <ul className="table-row">
              <li className="table-cell w-60">
                <img src={ game.icon }/>
              </li>
              <li className="table-cell">
                <span className="d-block game-title">{ game.name }</span>
                <span className="d-block game-publisher">ABC Coperation</span>
              </li>
            </ul>
          </div>
        </div>
        <div><Thumbnails thumbnails={ game.thumbnails }/></div>
      </div>
    )
  }
}

const mapStateToProps = ({ games, media }) => ({ games: games, media: media })

export default connect(mapStateToProps)(Gallary)
