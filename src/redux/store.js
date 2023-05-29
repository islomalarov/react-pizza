import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import paginationReducer from './slices/paginationSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    paginationReducer,
    searchReducer,
  },
});
