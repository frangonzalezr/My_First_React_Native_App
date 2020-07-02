import React, { Component } from 'react'
import { Actions, Router, Scene, Stack } from 'react-native-router-flux'
import {Splash, Home} from '../../pages'
// import Splash from '../../pages/splash/view'

class App extends Component {
    render() {
        return(
            <Router>
                <Stack key="root">
                    <Scene key={'Splash'} component={Splash} />
                    <Scene key={'Home'} component={Home} title={'Título 1'} />
                </Stack>
            </Router>
        );
    }
}

export default App
