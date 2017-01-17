import { connect } from 'react-redux'
import Gallary from '../components/gallary/index'

// return main video/picture to props
const mapStateToProps = (state) => {
  const { media } = state
  return media
}

export default connect(mapStateToProps)(Gallary)
