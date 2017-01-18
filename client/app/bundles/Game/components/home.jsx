import React from 'react'
import Collection from './collection/index'
import { connect } from 'react-redux'

const Home = (props) => {
  const { games } = props
  return (
    <div className="col-lg-10">
      <Collection games={ props.games } title="top android game"/>
    </div>
  )
}

// const mapStateToProps =({games}) => ({...games})

const mapStateToProps = ({games}) => {
  return {games: games}
}

export default connect(mapStateToProps)(Home)
