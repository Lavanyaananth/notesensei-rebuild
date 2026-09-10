import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notes: [],
  selectedNoteId: null,
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});
export default notesSlice.reducer;
