import { combineReducers } from 'redux';
import * as actions from "../actionTypes";

const initialState = {
    stocks: [],
    favourites: /*window.localStorage.getItem('pngx-favourites') ? JSON.parse(window.localStorage.getItem('pngx-favourites')) :*/ [],
    articles: []
};

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     state.articles.push(action.payload);
//   }
//   return state;
// }
// export rootReducer;

// const rootReducer = combineReducers({
//     currentUser,
//     counter
// });

export const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_STOCKS:
            return {
                ...state,
                movies: action.payload,
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
            const filtredFav = originalFav.filter((f) => f.id !== action.payload);

            // window.localStorage.removeItem('');

            return {
                ...state,
                favourites: filtredFav,
            };


        default:
            return state;
    }
};