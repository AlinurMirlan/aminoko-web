import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import breakpointReducer from "./breakpointSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    breakpoint: breakpointReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
