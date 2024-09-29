import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {configureStore} from "@reduxjs/toolkit";

// import stocksReducer from "./stocks/stocks";
import detailsReducer from './details/details';
import { rootReducer, stocksReducer } from "./reducers";
import colorReducer from "./reducers/colorReducer";
import filterReducer from "./reducers/filterReducer";
import favouriteReducer from "./reducers/favouriteReducer";
import counterReducer from "./reducers/counterReducer";
import loaderReducer from "./reducers/loaderReducer";

const reducer = combineReducers({
  // stocks: stocksReducer,
  details: detailsReducer,

  stocks: stocksReducer,
  // favourites: favouriteReducer,
  filters: filterReducer,
  color: colorReducer,
  counter: counterReducer,
  loadable: loaderReducer
});

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')
//
// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

const store = createStore(
    reducer,
    // rootReducer,
    // preloadedState,
    applyMiddleware(thunkMiddleware, logger)
);

// modern way of doing everything above
// export const store = configureStore({
//   reducer: {
//     movies: moviesReducer
//   },
// });

export default store;