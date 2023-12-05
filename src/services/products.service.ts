// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../schema';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://staging-api.manoapp.com/api/v1',
    headers: {
      Authorization: '1009c1a351683ae69c8d6f54d94fb898',
      StoreID: '2',
      UserAddressID: '49769',
    },
  }),
  endpoints: builder => ({
    getProducts: builder.mutation({
      query: () => ({
        url: 'users/products',
        method: 'POST',
      }),
      transformResponse: response => response.data?.items,
    }),
    getProductById: builder.query({
      query: productId => `users/products/${productId}`,
      transformResponse: (response: {data: Product}) => response.data,
    }),
  }),
});

export const {useGetProductsMutation, useGetProductByIdQuery} = productApi;
