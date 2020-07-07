import {connect} from 'react-redux'
import View from './view'
import {housesActions} from '../../../redux/houses'

const mapStateProps = state => {
  console.log('mapStateProps state: ', state)
  return {
    housesList: state.houses.list,
    loading: state.houses.loading
  }
}

const mapDispatchProps = dispatch => {
  return {
    setLoadingSuperficial: loading =>
      dispatch(housesActions.setLoading(loading))
  }
}

export default connect(
  mapStateProps,
  mapDispatchProps
)(View)
