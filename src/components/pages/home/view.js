import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  SafeAreaView,
  Image,
  Alert,
  FlatList,
  RefreshControl,
  Button,
  ActivityIndicator
} from 'react-native'
import styles from './styles'
import {getHouses} from '../../../api'
import {HouseCard} from '../../molecules'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
    this.props.getHouses()
  }

  _onHousePress = house => {
    this.props.setSelectedHouse(house)
    Actions.push('Characters', {title: house.nombre})
  }

  _renderItem = ({item}) => (
    <HouseCard house={item} onPress={this._onHousePress} />
  )

  render() {
    const {housesList, loading} = this.props

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={housesList}
          keyExtractor={(item, index) => `card-${item.id}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor="white"
              refreshing={loading}
              onRefresh={this.props.getHouses}
              title={'Cargando...'}
              color={'white'}
            />
          }
        />
      </SafeAreaView>
    )
  }
}

Home.propTypes = {
  housesList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  getHouses: PropTypes.func,
  setSelectedHouse: PropTypes.func
}

export default Home
