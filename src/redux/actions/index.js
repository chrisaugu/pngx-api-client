import {
  FETCH_STOCKS,
  FETCH_COMPANIES,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  LAST_UPDATED_DATE,
  CURRENT_DATE
} from '../actionTypes';

let nextTodoId = 0
export const addTodo = (content) => ({
  type: "ADD_TODO",
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const fetchCompanies = (payload) => ({
  type: FETCH_COMPANIES,
  payload,
});

export const fetchStocks = (payload) => ({
  type: FETCH_STOCKS,
  payload
});

export const addToFavourites = stock => ({
  type: ADD_TO_FAVOURITE, // mandatory key
  payload: stock
});

export const removeFromFavourites = id => ({
  type: REMOVE_FROM_FAVOURITE, // mandatory key
  payload: id
});

export function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      return { type: "DATA_LOADED", payload: json };
    });
}

export const setLastUpdated = (date) => ({
  type: LAST_UPDATED_DATE,
  date
})

export const setDate = (date) => ({
  type: CURRENT_DATE,
  date
})