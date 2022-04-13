import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import Api from "../../lib/api";
import {FETCH_COMPANIES, FETCH_STOCKS} from "../actionTypes";

// initial state
const initialState = {
  isFetching: false,
  data: [],
  error: {},
  count: 0,
  stocks: [],
  favourites: []
};

// export const getStocks = createAsyncThunk(
//   'redux/stocks/stocks.js',
//   async () => {
//     const response = await Api.get("/stocks").catch((error) => error);
//     const data = [];
//
//     for (let i = 0; i < 51; i += 1) {
//       const {
//         symbol, name, price, exchange, exchangeShortName,
//       } = response.data[i];
//
//       const formatedData = {
//         stockId: uuidv4(),
//         symbol,
//         name,
//         price,
//         exchange,
//         exchangeShortName,
//         focus: false,
//       };
//
//       data.push(formatedData);
//     }
//
//     return data;
//   },
// );
//
// const stocksSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     getStock: (state, action) => {
//       const stocks = { ...state };
//       stocks.data = stocks.data.map((stocks) => {
//         if (stocks.stockId === action.payload) {
//           return { ...stocks, focus: (stocks.focus === false ? !stocks.focus : stocks.focus) };
//         }
//         return { ...stocks, focus: false };
//       });
//       return stocks;
//     },
//   },
//   extraReducers: {
//     [getStocks.pending.type]: (state) => ({ ...state, isFetching: true }),
//     [getStocks.fulfilled.type]: (state, action) => (
//       {
//         ...state, isFetching: false, data: action.payload, error: {},
//       }),
//     [getStocks.rejected.type]: (state) => ({ ...state, isFetching: false, error: {} }),
//   },
// });
//
// export const { getStock } = stocksSlice.actions;
// export default stocksSlice.reducer;

// action creators
export const fetchCompanies = (payload) => ({
  type: FETCH_COMPANIES,
  payload,
});
export const fetchStocks = (payload) => ({
  type: FETCH_STOCKS,
  payload
});

// // thunk action functions
// export const fetchCompaniesFromAPI = () => async (dispatch) => {
//   await fetch(`${baseURL}`)
//       .then((response) => response.json())
//       .then((companiesList) => {
//         const arrangedList = companiesList.data.map((company) => ({
//           symbol: company.code,
//           name: company.short_name,
//           change: company.chg_today,
//           price: company.bid,
//           changesPercentage: company.changesPercentage,
//         }));
//         if (arrangedList) {
//           dispatch(fetchCompanies(arrangedList));
//         }
//       });
// };

export const fetchStocksFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
      .then((response) => response.json())
      .then((stocksList) => {
        const arrangedList = stocksList.data.map((stock) => ({
          symbol: stock.code,
          name: stock.short_name,
          change: stock.chg_today,
          price: stock.bid,
          // changesPercentage: stock.changesPercentage
        }));
        if (arrangedList) {
          dispatch(fetchStocks(arrangedList));
        }
      });
};

// export const fetchAsyncMovies = createAsyncThunk(
//   "movies/fetchAsyncMovies",
//   async () => {
//     const movieText = "Harry";
//     const response = await Api.get(
//       `?apiKey=${APIKey}&s=${movieText}&type=movie`
//     );
//     return response.data;
//   }
// );
//
// export const fetchAsyncShows = createAsyncThunk(
//   "movies/fetchAsyncShows",
//   async () => {
//     const seriesText = "Friends";
//     const response = await Api.get(
//       `?apiKey=${APIKey}&s=${seriesText}&type=series`
//     );
//     return response.data;
//   }
// );
//
// export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
//   "movies/fetchAsyncMovieOrShowDetail",
//   async (id) => {
//     const response = await Api.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
//     return response.data;
//   }
// );
//
// // reducer
// const stockReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_COMPANIES:
//       return [...action.payload];
//     case 'INCREMENT':
//       return { count: state.count + action.num };
//       // return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state;
//   }
// }
//
// const movieSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {
//     removeSelectedMovieOrShow: (state) => {
//       state.selectedMovieOrShow = {};
//     },
//   },
//   extraReducers: {
//     [fetchAsyncMovies.pending]: () => {
//       console.log("Pending");
//     },
//     [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Succesfully");
//       return { ...state, movies: payload };
//     },
//     [fetchAsyncMovies.rejected]: () => {
//       console.log("Rejected");
//     },
//     [fetchAsyncShows.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Succesfully");
//       return { ...state, shows: payload };
//     },
//     [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
//       console.log("Fetched Succesfully");
//       return { ...state, selectedMovieOrShow: payload };
//     },
//   },
// });
//
// Selectors
// export const { removeSelectedMovieOrShow } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
// export const getAllShows = (state) => state.movies.shows;
// export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
// export default movieSlice.reducer;
//
// export default stockReducer;