import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import breakpointReducer from "./breakpointSlice";
import bottomPanelReducer from "./dimensionsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    breakpoint: breakpointReducer,
    dimensions: bottomPanelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
