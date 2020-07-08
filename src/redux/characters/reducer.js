import * as types from './types'

const initialState = {
  // loading: false,
  // list: [],
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //     case types.SET_LOADING:
    //         return {
    //             state: {...state, loading: state.payload.loading}
    //         }
    //     case types.UPDATE_LIST:
    //         return {
    //             state: {...state, list: state.payload.list}
    //         }
    default:
      return state
  }
}

export default reducer
