import { connect } from 'react-redux'
import Gallary from '../components/gallary/index'
import selectThumbnail from '../actions/index'

const mapStateToProps = (state) => ({ thumbnail: state.thumbnail })

export default connect(mapStateToProps, selectThumbnail)(Gallary)
