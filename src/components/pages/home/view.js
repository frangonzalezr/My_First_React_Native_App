import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import {getHouses} from '../../../api'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    }

    async componentDidMount() {
        // NEW WAY
        try {
            const getHousesRes = await getHouses()
            console.log('getHousesRes: ', getHousesRes)
            const houses = getHousesRes.data.records
            this.setState({ houses: houses })
            // this.setState({houses})
        } catch(e) {
            console.log('getHousesError: ', e)
        }
        // OLD WAY
        // getHouses()
        // .then((res) => {
        //     console.log('getHouses response: ', res)
        // })
        // .catch((e) => {
        //     console.log('getHouses error: ', e)
        //     conseole.log('e.response: ', e.response)
        // })
    }

    render() {
        console.log('this.state.houses: ', this.state.houses)
        return(
            <View style={styles.container}>
                {this.state.houses.map((v, i) => (
                    <Text key={`cell-${i}`} style={{marginVertical: 20, color: 'white'}}>
                        { v.nombre }
                    </Text>
                ))}
            </View>
        )
    }
}

export default Home