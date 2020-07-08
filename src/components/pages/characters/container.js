import {connect} from 'react-redux'
import View from './view'
import {charactersActions} from '../../../redux/characters'

const mapStateProps = state => {
  return {
    house: state.houses.item
  }
}

const mapDispatchProps = dispatch => {
  return {
    getCharacters: () => dispatch(charactersActions.fetchCharacters())
  }
}

export default connect(
  mapStateProps,
  mapDispatchProps
)(View)
