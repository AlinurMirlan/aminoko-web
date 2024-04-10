import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type PanelDimensions = { width: number; height: number };

export const dimensionsSlice = createSlice({
  name: "dimensions",
  initialState: {
    bottomPanelDimensions: { width: 0, height: 0 },
    topPanelDimensions: { width: 0, height: 0 },
  },
  reducers: {
    updateBottomPanelDimensions: (
      state,
      action: PayloadAction<PanelDimensions>
    ) => {
      state.bottomPanelDimensions = action.payload;
    },
    updateTopPanelDimensions: (
      state,
      action: PayloadAction<PanelDimensions>
    ) => {
      state.topPanelDimensions = action.payload;
    },
  },
});

export const { updateBottomPanelDimensions, updateTopPanelDimensions } =
  dimensionsSlice.actions;

export default dimensionsSlice.reducer;
