// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../schema';

// Define a service using a base URL and expected endpoints
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
    getProducts: builder.mutation<Product, undefined>({
      query: () => ({
        url: 'users/products',
        method: 'POST',
      }),
    }),
    getProductById: builder.query<any, string>({
      query: productId => `users/products/${productId}`,
    }),
  }),
});

export const {useGetProductsMutation, useGetProductByIdQuery} = productApi;
