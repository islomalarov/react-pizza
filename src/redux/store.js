import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import searchReducer from './slices/searchSlice';
import cartReducer from './slices/cartSlice';
import pizzasReducer from './slices/pizzasSlice';
export const store = configureStore({
  reducer: {
    filterReducer,
    searchReducer,
    cartReducer,
    pizzasReducer,
  },
});
