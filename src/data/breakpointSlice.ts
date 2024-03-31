import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { breakpoints } from "../constants/breakpoints";

export const sidebarSlice = createSlice({
  name: "breakpoint",
  initialState: {
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
  },
  reducers: {
    updateBreakpoints: (state, action: PayloadAction<number>) => {
      const screenSize = action.payload;
      state.isSm = screenSize >= breakpoints.sm;
      state.isMd = screenSize >= breakpoints.md;
      state.isLg = screenSize >= breakpoints.lg;
      state.isXl = screenSize >= breakpoints.xl;
      state.is2Xl = screenSize >= breakpoints["2xl"];
    },
  },
});

export const { updateBreakpoints } = sidebarSlice.actions;

export default sidebarSlice.reducer;
