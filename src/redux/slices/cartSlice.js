import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },
    incItem(state, action) {
      state.totalCount -= 1;
      state.totalPrice -= action.payload.price;
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count > 1
          ? findItem.count--
          : (state.items = state.items.filter((item) => item.id !== action.payload.id));
      }
    },
    removeItem(state, action) {
      state.totalCount -= action.payload.count;
      state.totalPrice -= action.payload.count * action.payload.price;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems(state) {
      state.totalCount = 0;
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const { addItem, removeItem, incItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
