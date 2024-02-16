import { SIMULATE_SUCCESS } from '../actions/types'

const initialState = {
  positions: []
}

const simulationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMULATE_SUCCESS:
      return {
        ...state,
        positions: action.payload
      }
    default:
      return state
  }
}

export default simulationReducer
