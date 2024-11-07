import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from "@/config/config";
import {Stock} from "@/models/types";

type StocksResponse = Stock[];

export const historicalApi = createApi({
    reducerPath: 'historicalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.api_url}/api`,
    }),
    tagTypes: ['Stocks'],
    endpoints: (builder) => ({
        getHistoricals: builder.query<StocksResponse, string>({
            query: (code) => `historicals/${code}`,
        })
    })
})

export const { useGetHistoricalsQuery } = historicalApi;