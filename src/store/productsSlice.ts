import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../schema';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '.';

interface ProductsState {
  data: Product[][];
  page: number;
}

const initialState: ProductsState = {
  data: [],
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

      for (let i = 1; i < 20; i++) {
        if (i % 19 === 0) {
          pageableProducts[currentPage] = [...tempArray];
          tempArray = [];
          currentPage++;
        }
        const element = action.payload[i - 1];
        tempArray.push(element);
      }

      if (tempArray.length > 0) {
        pageableProducts[currentPage] = [...tempArray];
        tempArray = [];
      }

      state.data = pageableProducts;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const {setPage, serializeProducts} = productsSlice.actions;

export const getProducts = (state: RootState) => {
  if (state.products.data.length <= state.products.page - 1) {
    return state.products.data[state.products.page - 1];
  } else {
    return [];
  }
};

export const getCurrentPage = (state: RootState) => state.products.page;

export default productsSlice.reducer;
