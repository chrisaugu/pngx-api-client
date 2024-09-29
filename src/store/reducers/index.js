import { combineReducers } from 'redux';
import * as actions from "../actionTypes";

const initialState = {
    date: "",
    last_updated: "",
    stocks: [],
    favourites: /*localStorage.getItem('pngx-favourites') ? JSON.parse(window.localStorage.getItem('pngx-favourites')) :*/ [],
};

// export const rootReducer = combineReducers({
    // currentUser,
    // counter
// });

export const stocksReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case actions.FETCH_STOCKS:
            return {
                ...state,
                stocks: action.payload,
            };
        
        case actions.ADD_TO_FAVOURITE:
            const newMovie = [...state.favourites, action.payload];

            window.localStorage.setItem('favourite', JSON.stringify(newMovie));

            return {
                ...state,
                favourites: newMovie,
            };
        
        case actions.REMOVE_FROM_FAVOURITE:
            const originalFav = state.favourites;
            const filtredFav = originalFav.filter(item => item._id !== action.payload);

            // window.localStorage.removeItem('');

            return {
                ...state,
                favourites: filtredFav,
            };

        case actions.LAST_UPDATED_DATE:
            return {
                ...state,
                last_updated: action.date 
            }

        case actions.CURRENT_DATE:
            return {
                ...state,
                date: action.date
            }
            
        default:
            return state;
    }
};