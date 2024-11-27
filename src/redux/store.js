import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/campersSlice";
import { rootReducer } from "./root/rootSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    root: rootReducer,
  },
});
