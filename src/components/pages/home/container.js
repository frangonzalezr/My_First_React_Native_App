import {connect} from 'react-redux'
import View from './view'
import {housesActions} from '../../../redux/houses'

const mapStateProps = state => {
  console.log('mapStateProps state: ', state)
  return {
    housesList: state.houses.list,
    loading: state.houses.loading,
    houseSelected: state.houses.house
  }
}

const mapDispatchProps = dispatch => {
  return {
    // setLoadingSuperficial: loading =>
    //   dispatch(housesActions.setLoading(loading))
    getHouses: () => dispatch(housesActions.fetchHouses()),
    setSelectedHouse: house => dispatch(housesActions.setItem(house))
  }
}

export default connect(
  mapStateProps,
  mapDispatchProps
)(View)
