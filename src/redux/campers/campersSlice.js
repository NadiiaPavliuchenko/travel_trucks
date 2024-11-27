import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations";

const initialState = {
  total: 0,
  items: null,
  filters: null,
  favourites: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllCampers.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    });
  },
});

export const campersReducer = campersSlice.reducer;
