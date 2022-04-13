// redux/selectors.js

export const getStockState = (store) => store.stocks;

export const getStockList = (store) => getStockState(store) ? getStockState(store).allIds : [];

export const getStockById = (store, id) => getStockState(store) ? { ...getStockState(store).byIds[id], id } : {};

export const getStocks = (store) => getStockList(store).map((id) => getStockById(store, id));