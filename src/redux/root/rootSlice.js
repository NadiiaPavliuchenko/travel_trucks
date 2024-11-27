import { createSlice } from "@reduxjs/toolkit";
import { handlePending, handleRejected, handleFulfilled } from "./handlers";

const initialState = {
  isLoading: null,
  isError: null,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected)
      .addMatcher(({ type }) => type.endsWith("/fulfilled"), handleFulfilled);
  },
});

export const rootReducer = rootSlice.reducer;
