import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../schema';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '.';

interface ProductsState {
  data: Product[];
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
    setProducts(state, action: PayloadAction<Product[]>) {
      state.data = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getProducts = (state: RootState) =>
  state.products.data[state.products.page];

export default productsSlice.reducer;
