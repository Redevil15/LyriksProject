import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '02d983342fmsh45bcb99091f6f61p18974ajsnea143c2e7fff')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: ()=>'/charts/world'}),
    }),
});
export const {
    useGetTopChartsQuery,
}= shazamCoreApi