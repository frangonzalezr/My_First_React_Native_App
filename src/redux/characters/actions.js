import * as types from './types'
import * as api from '../../api'
import {Alert} from 'react-native'

const updateList = () => {
  return {
    action: {}
  }
}

export const fetchCharacters = () => {
  // REDUX THUNK
  return async (dispatch, getState) => {
    const house = getState().houses.item
    if (!house) {
      return false
    }
    console.log('house: ', house)
    try {
      const getCharactersRes = await api.getCharacters(house.id)
      console.log('getCharactersRes: ', getCharactersRes)
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error')
    }
  }
}
