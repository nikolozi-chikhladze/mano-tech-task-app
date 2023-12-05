import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../schema';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '.';

interface ProductsState {
  data: Product[][];
  feed: Product[];
  page: number;
}

const initialState: ProductsState = {
  data: [],
  feed: [],
  page: 1,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    serializeProducts(state, action: PayloadAction<Product[]>) {
      let pageableProducts = [];
      let currentPage = 1;
      let tempArray = [];

      for (let i = 0; i < action.payload.length; i++) {
        if (i % 20 === 0 && tempArray.length > 0) {
          pageableProducts[currentPage] = [...tempArray];
          tempArray = [];
          currentPage++;
        }
        const element = action.payload[i];
        tempArray.push(element);
      }

      if (tempArray.length > 0) {
        pageableProducts[currentPage] = [...tempArray];
        tempArray = [];
      }

      state.data = pageableProducts;
      state.feed = pageableProducts[state.page];
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      state.feed = [...state.feed, ...state.data[state.page]];
    },
  },
});

export const {setPage, serializeProducts} = productsSlice.actions;

export const getProducts = (state: RootState) => {
  return state.products.data;
};

export const getCurrentPage = (state: RootState) => state.products.page;

export const getFeed = (state: RootState) => state.products.feed;

export default productsSlice.reducer;
