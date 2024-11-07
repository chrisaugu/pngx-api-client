import { combineReducers } from 'redux';
import * as actions from "../actionTypes";
import {colorReducer} from "@/stores/reducers/colorReducer";
import {counterReducer} from "@/stores/reducers/counterReducer";
import {favouriteReducer} from "@/stores/reducers/favouriteReducer";
import {filterReducer} from "@/stores/reducers/filterReducer";
import {loaderReducer} from "@/stores/reducers/loaderReducer";

const initialState = {
    date: "",
    last_updated: "",
    stocks: [],
    favourites: /*localStorage.getItem('pngx-favourites') ? JSON.parse(window.localStorage.getItem('pngx-favourites')) :*/ [],
};

export const rootReducer = combineReducers({
    // currentUser,
    // counter
    colorReducer,
    counterReducer,
    favouriteReducer,
    filterReducer,
    loaderReducer,
});

