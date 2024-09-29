export const getStockState = (store) => store.stocks;

// export const getStockList = (store) => getStockState(store) ? getStockState(store).allIds : [];
export const getStockList = (store) => store.stocks ? store.stocks.stocks : [];

export const getStockById = (store, id) => getStockState(store) ? { ...getStockState(store).byIds[id], id } : {};

export const getStocks = (store) => getStockList(store).map((id) => getStockById(store, id));


// export const getFavouriteState = (store) => getStockState(store).favourites;
export const getFavouriteState = (store) => store.stocks.favourites;

// export const getFavouritesList = (store) => getStockState(store) ? store.stocks.favourites : [];
export const getFavouritesList = (store) => store.stocks ? store.stocks.favourites : [];


export const getLastUpdated = (store) => store.stocks.last_updated;
export const getDate = (store) => store.stocks.date;

export const getLoadableStatus = (store) => store.loadable;