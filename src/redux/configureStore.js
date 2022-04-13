import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {configureStore} from "@reduxjs/toolkit";

// import stocksReducer from "./stocks/stocks";
// import detailsReducer from './details/details';
import {stocksReducer} from "./reducers";
import rotateReducer from "./reducers/rotateReducer";
import colorReducer from "./reducers/colorReducer";
import filterReducer from "./reducers/filterReducer";
import favouriteReducer from "./reducers/favouriteReducer";
import couterReducer from "./reducers/counterReducer";

const reducer = combineReducers({
  stocks: stocksReducer,
  // stocks: stocksReducer,
  // additional reducers could be added here
  // homeReducer,
  // details: detailsReducer,
  rotate: rotateReducer,
  activeState: colorReducer,
  filters: filterReducer,
  favourites: favouriteReducer,
  counter: couterReducer
});

const store = createStore(
  reducer,
  // rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware, logger)
);

// modern way of doing everything above
// export const store = configureStore({
//   reducer: {
//     movies: moviesReducer
//   },
// });

export default store;