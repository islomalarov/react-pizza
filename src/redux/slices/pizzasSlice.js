import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (api) => {
  const { data } = await axios.get(api);
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'failed';
      state.items = [];
    },
  },
});
export const selectPizzas = (state) => state.pizzasReducer;
export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
