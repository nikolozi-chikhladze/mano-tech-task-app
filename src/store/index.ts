import {configureStore} from '@reduxjs/toolkit';
import ProductsReducer from './productsSlice';
import {productApi} from '../services/products.service';

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
