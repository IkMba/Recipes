import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  favourites: [],
  bookmarks: [],
};

const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFilter(state, action) {
      state.filters = action.payload;
    },
    deleteFilter(state, action) {
      state.filters = state.filters.filter((item) => item !== action.payload);
    },
    clearFilters(state) {
      state.filters = [];
    },
    addFavourite(state, action) {
      state.favourites.push(action.payload);
    },
    deleteFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item.label !== action.payload
      );
    },
    addBookmark(state, action) {
      state.bookmarks.push(action.payload);
    },
    deleteBookmark(state, action) {
      state.bookmarks = state.bookmarks.filter(
        (item) => item.label !== action.payload
      );
    },
  },
});

export const {
  addFilter,
  deleteFilter,
  clearFilters,
  addFavourite,
  deleteFavourite,
  addBookmark,
  deleteBookmark,
} = appSlice.actions;

export const getFilters = (state) => state.data.filters;
export const getFavourites = (state) => state.data.favourites;
export const getBookmarks = (state) => state.data.bookmarks;

export default appSlice.reducer;
