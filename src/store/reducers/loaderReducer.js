import {STATUS_LOADABLE_CHANGED} from "../actionTypes";

const initialState = {
  isShown: false,
  state: 'loading' // loading, hasValue
}

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case STATUS_LOADABLE_CHANGED: {
      return {
        ...state,
        state: action.payload
      }
    }
    
    default:
      return state;
  }
}
export default loadReducer;