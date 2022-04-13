import {ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE} from "../actionTypes";

export default (state = { favourites: [] } , action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };

    case REMOVE_FROM_FAVOURITE:
      const favourites = state.favourites.filter(item => item !== action.name);
      return {
        ...state,
        favourites
      };

    default:
      return state;
  }
};