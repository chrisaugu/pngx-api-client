// Stocks
export const getStockState = (store) => store.stocks;
// export const getStockList = (stores) => getStockState(stores) ? getStockState(stores).allIds : [];
export const getStockList = (store) => store.stocks ? store.stocks.stocks : [];
export const getStockById = (store, id) => getStockState(store) ? { ...getStockState(store).byIds[id], id } : {};
export const getStocks = (store) => getStockList(store).map((id) => getStockById(store, id));

// Watchlist
// export const getFavouriteState = (stores) => getStockState(stores).favourites;
export const getFavouriteState = (store) => store.stocks.favourites;
// export const getFavouritesList = (stores) => getStockState(stores) ? stores.stocks.favourites : [];
export const getFavouritesList = (store) => store.stocks ? store.stocks.favourites : [];

// Prefs
export const getLastUpdated = (store) => store.stocks?.last_updated;
export const getDate = (store) => store.stocks?.date;
export const getLoadableStatus = (store) => store?.loadable;
export const getTheme = (store) => store.theme;