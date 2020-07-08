import {connect} from 'react-redux'
import View from './view'
import {housesActions} from '../../../redux/houses'

const mapStateProps = state => {
  return {
    housesList: state.houses.list,
    loading: state.houses.loading
  }
}

const mapDispatchProps = dispatch => {
  return {
    getHouses: () => dispatch(housesActions.fetchHouses()),
    setSelectedHouse: house => dispatch(housesActions.setItem(house))
  }
}

export default connect(
  mapStateProps,
  mapDispatchProps
)(View)
