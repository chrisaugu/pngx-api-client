import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {configureStore} from "@reduxjs/toolkit";

// import stocksReducer from "./stocks/stocks";
// import detailsReducer from './details/details';
import {stocksReducer} from "./reducers";
import colorReducer from "./reducers/colorReducer";
import filterReducer from "./reducers/filterReducer";
import favouriteReducer from "./reducers/favouriteReducer";
import couterReducer from "./reducers/counterReducer";

const reducer = combineReducers({
  stocks: stocksReducer,
  // details: detailsReducer,
  color: colorReducer,
  filters: filterReducer,
  // favourites: favouriteReducer,
  counter: couterReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logger)
);

// modern way of doing everything above
// export const store = configureStore({
//   reducer: {
//     movies: moviesReducer
//   },
// });

export default store;