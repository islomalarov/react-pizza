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
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count > 1
          ? findItem.count--
          : (state.items = state.items.filter((item) => item.id !== action.payload.id));
      }
      state.totalCount -= 1;
      state.totalPrice -= action.payload.price;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalCount -= action.payload.count;
      state.totalPrice -= action.payload.count * action.payload.price;
    },
    clearItems(state) {
      state.totalCount = 0;
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const selectCart = (state) => state.cartReducer;
export const selectCartItemById = (id) => (state) =>
  state.cartReducer.items.find((item) => item.id === id);
export const { addItem, removeItem, incItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
