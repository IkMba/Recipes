import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addItem(state, action) {
      state.filters.push(action.payload);
    },
    deleteItem(state, action) {
      state.filters = state.cart.filter((item) => item !== action.payload);
    },
    clearFilters(state) {
      state.filters = [];
    },
  },
});

export const { addItem, deleteItem, clearFilters } = filterSlice.actions;

export const getFilters = (state) => state.filters.filters;

export default filterSlice.reducer;
