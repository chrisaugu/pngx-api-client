import {STATUS_FILTER_CHANGED} from "../actionTypes";

const initialState = {
  status: 'All',
  colors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case STATUS_FILTER_CHANGED: {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload
      }
    }
    default:
      return state
  }
}