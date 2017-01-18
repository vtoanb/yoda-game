import { connect } from 'react-redux'
import Gallary from '../components/gallary/index'

// return main video/picture to props
const mapStateToProps = ({ games }) => ({ games: games })

export default connect(mapStateToProps)(Gallary)
