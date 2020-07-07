import * as types from './types'

const initialState = {
  loading: false,
  list: [],
  item: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list}
    // return {list: state.list, loading: state.loading, item: state.item}
    case types.SET_LOADING:
      return {...state, loading: action.payload.loading}
    case types.SET_ITEM:
      return {...state, item: action.payload.item}
    default:
      return state
  }
}

export default reducer

// const demoAction = (newList) => {
//     return {
//         type: types.UPDATE_LIST
//         payload: { list: newList}
//     }
// }
