import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from "@/config/config";
import {Company} from "@/models/types";

type CompaniesResponse = Company[];

export const companyApi = createApi({
    reducerPath: 'companyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${config.api_url}/api`,
    }),
    tagTypes: ['Companies'],
    endpoints: (builder) => ({
        getCompanies: builder.query<CompaniesResponse, string>({
            query: () => 'companies'
        }),
        getCompany: builder.query<Company, string>({
            query: (code) => `companies/${code}/code`,
        }),
        getCompanyByCode: builder.query<Company, string>({
            query: (code) => `companies/${code}`,
        }),
    })
});

export const { useGetCompanyQuery, useGetCompaniesQuery } = companyApi;