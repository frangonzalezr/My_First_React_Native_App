import React, {Component} from 'react';
import {SafeAreaView, Image, Alert, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {getHouses} from '../../../api';
import {HouseCard} from '../../molecules'
import {Actions} from 'react-native-router-flux'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      loading: false,
    };
  }

  componentDidMount() {
    this._initHousesList()
  }

  _initHousesList = async () => {
    try {
      this.setState({loading: true})
      const getHousesRes = await getHouses();
      const houses = getHousesRes.data.records;
      this.setState({houses: houses, loading: false});
      // this.setState({houses})
    } catch (e) {
      this.setState({loading: false})
      Alert.alert('Error', 'Ha ocurrido un error')
    }
  } 

  _onHousePress = (house) => {
    // Alert.alert('atención', 'casa pulsada')
    Actions.push('Characters', {house, title: house.nombre})
  }

  _renderItem = ({item}) => (
    <HouseCard house={item} onPress={this._onHousePress}/>
    // <HouseCard house={item} onPress={(house) => this._onHousePress(house)}/>
  )

  render() {
    console.log('this.state.houses: ', this.state.houses)
    const {houses, loading} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={houses}
          keyExtractor={(item, index) => `card-${item.id}`}
          numColumns={2}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl 
            tintColor = 'white'
            refreshing={loading} 
            onRefresh={this._initHousesList}
            title={'Cargando...'}
            titleColor={'white'}
             />
          }
        />
        
      </SafeAreaView>
    )
  }
}

export default Home
