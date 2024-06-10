import { createSlice } from "@reduxjs/toolkit";

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState: {
    currentFlashcardId: 0,
  },
  reducers: {
    setCurrentFlashcardId: (state, action: { payload: number }) => {
      state.currentFlashcardId = action.payload;
    },
  },
});

export const { setCurrentFlashcardId } = flashcardSlice.actions;

export default flashcardSlice.reducer;
