import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import breakpointReducer from "./breakpointSlice";
import bottomPanelReducer from "./dimensionsSlice";
import flashcardReducer from "./flashcardSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    breakpoint: breakpointReducer,
    dimensions: bottomPanelReducer,
    flashcard: flashcardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
