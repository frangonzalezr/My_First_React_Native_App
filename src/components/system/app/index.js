import React, {Component} from 'react'
import {StatusBar} from 'react-native'
import {Actions, Router, Scene, Stack} from 'react-native-router-flux'
import {Splash, Home, Characters} from '../../pages'
import colors from '../../../assets/colors'
import {Provider} from 'react-redux'
import store from '../../../config/redux'

class App extends Component {
  constructor(props) {
    super(props)
    StatusBar.setBarStyle('light-content', true)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key={'Splash'} component={Splash} hideNavBar />
            <Scene
              key={'Home'}
              component={Home}
              /*title={'Título 1'}*/ hideNavBar
            />
            <Scene
              key={'Characters'}
              component={Characters}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
              backButtonTextStyle={{color: colors.white}}
              backButtonTintColor={colors.white}
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
