import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from "@/config/config";
import {Stock} from "@/models/types";

type StocksResponse = Stock[];

export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${config.api_url}/api`,
    }),
    tagTypes: ['Stocks'],
    endpoints: (builder) => ({
        getStocks: builder.query<StocksResponse, string>({
            query: () => 'stocks'
        }),
        getStock: builder.query<Stock, string>({
            query: (id) => `stocks/${id}`,
        })
    })
})

export const { useGetStockQuery, useGetStocksQuery } = stockApi;