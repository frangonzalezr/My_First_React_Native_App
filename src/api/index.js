import axios from 'axios'
import {BASE_URL} from '../config/api'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-type': 'application/json'}
})

export const getHouses = () => {
  const url = '/casas'
  return instance.get(url)
}

export const getCharacters = houseId => {
  const url = `/personajes?casa=${houseId}`
  return instance.get(url)
}
