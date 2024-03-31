import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type PanelDimensions = { width: number; height: number };

export const dimensionsSlice = createSlice({
  name: "bottomPanel",
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
  },
});

export const { updateBottomPanelDimensions } = dimensionsSlice.actions;

export default dimensionsSlice.reducer;
