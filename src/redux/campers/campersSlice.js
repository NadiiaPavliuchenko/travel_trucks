import { createSlice } from "@reduxjs/toolkit";
import { fetchCamper, fetchAllCampers } from "./operations";

const initialState = {
  items: null,
  filters: null,
  favourites: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllCampers.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default campersSlice.reducer;
