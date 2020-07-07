import React, {Component} from 'react'
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
  constructor(props) {
    super(props)
    this.state = {
      houses: [],
      loading: false
    }
  }

  componentDidMount() {
    // this._initHousesList()
  }

  _initHousesList = async () => {
    try {
      this.setState({loading: true})
      const getHousesRes = await getHouses()
      const houses = getHousesRes.data.records
      this.setState({houses: houses, loading: false})
      // this.setState({houses})
    } catch (e) {
      this.setState({loading: false})
      Alert.alert('Error', 'Ha ocurrido un error')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.loading && this.props.loading) {
      this._showLoadingAlert()
    }
  }

  _showLoadingAlert = () => {
    Alert.alert('Atención', 'Loading activado')
  }

  _onHousePress = house => {
    // Alert.alert('atención', 'casa pulsada')
    Actions.push('Characters', {house, title: house.nombre})
  }

  _renderItem = ({item}) => (
    <HouseCard house={item} onPress={this._onHousePress} />
    // <HouseCard house={item} onPress={(house) => this._onHousePress(house)}/>
  )

  render() {
    const {houses, loading} = this.state
    console.log('this.props.loading: ', this.props.loading)

    return (
      <SafeAreaView style={styles.container}>
        <Button
          title={'Púlsame para cambiar el valor de loading'}
          onPress={() => this.props.setLoadingSuperficial(!this.props.loading)}
        />
        <ActivityIndicator
          animating={this.props.loading}
          tintColor={'white'}
          size={'large'}
        />
        <FlatList
          data={houses}
          keyExtractor={(item, index) => `card-${item.id}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor="white"
              refreshing={loading}
              onRefresh={this._initHousesList}
              title={'Cargando...'}
              color={'white'}
            />
          }
        />
      </SafeAreaView>
    )
  }
}

export default Home
