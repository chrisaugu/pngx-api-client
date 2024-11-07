import { combineReducers } from 'redux';
import {configureStore, setupListeners} from "@reduxjs/toolkit";

// slices
import {stocksReducer} from "./stocks/stocks";
import detailsReducer from './details/details';

// reducers
import { rootReducer } from "./reducers";
import {stockApi} from "@/services/stock";
import {companyApi} from "@/services/company";
import {historicalApi} from "@/services/historical";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// uncomment this to support persisted storage
// const persistedReducer = persistReducer(persistConfig, orderReducer)

const reducer = combineReducers({
    rootReducer,
    stocks: stocksReducer,
    details: detailsReducer,
    // favourites: favouriteReducer,
    // filters: filterReducer,
    // color: colorReducer,
    // counter: counterReducer,
    // loadable: loaderReducer
});

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')
//
// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

// modern way of doing everything above
const store = configureStore({
    // preloadedState,
    // applyMiddleware(thunkMiddleware, logger)
    reducer: {
        root: reducer,
        // uncomment this to support persisted storage
        // user: userReducer,
        // auth: authReducer,
        // counter: counterReducer,
        [stockApi.reducerPath]: stockApi.reducer,
        [companyApi.reducerPath]: companyApi.reducer,
        [historicalApi.reducerPath]: historicalApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            stockApi.middleware,
            companyApi.middleware,
            historicalApi.middleware,
        )
    }
})

// setupListeners(store.dispatch)

export const makeStore = () => {
    return store;
}