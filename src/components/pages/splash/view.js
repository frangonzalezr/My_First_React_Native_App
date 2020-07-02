import React, {Component} from 'react'
import {View, Button} from'react-native'
import styles from './styles'
import {Actions} from 'react-native-router-flux'

class Splash extends React.Component {

    componentDidMount() {
        setTimeout(() => Actions.replace('Home'), 1000)
    }

    render(){
        return <View style={styles.container}>
            {/* <Button 
            title="Navegar a home" 
            onPress={() => {
                // Actions.push('Home', {title: 'Título 2'})
                Actions.Home({title: 'Título 2'})
            }}
            /> */}
        </View>
    }
}

export default Splash