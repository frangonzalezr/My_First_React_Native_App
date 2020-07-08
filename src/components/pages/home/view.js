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
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     houses: [],
  //     loading: false
  //   }
  // }

  componentDidMount() {
    // this._initHousesList()
    this.props.getHouses()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (!prevProps.loading && this.props.loading) {
  //     this._showLoadingAlert()
  //   }
  // }

  // _showLoadingAlert = () => {
  //   Alert.alert('Atención', 'Loading activado')
  // }

  _onHousePress = house => {
    // Alert.alert('atención', 'casa pulsada')
    this.props.setSelectedHouse(house)
    Actions.push('Characters', {title: house.nombre})
  }

  _renderItem = ({item}) => (
    <HouseCard house={item} onPress={this._onHousePress} />
    // <HouseCard house={item} onPress={(house) => this._onHousePress(house)}/>
  )

  render() {
    const {housesList, loading} = this.props
    console.log('this.props.loading: ', this.props.loading)

    return (
      <SafeAreaView style={styles.container}>
        {/* <Button
          title={'Púlsame para cambiar el valor de loading'}
          onPress={() => this.props.setLoadingSuperficial(!this.props.loading)}
        />
        <ActivityIndicator
          animating={this.props.loading}
          tintColor={'white'}
          size={'large'}
        /> */}
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
