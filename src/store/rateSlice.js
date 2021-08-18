import { createSlice } from "@reduxjs/toolkit";

const rateSlice = createSlice({
  name: "rate",
  initialState: [],
  reducers: {
    getRates: (state, action) => (state = [...action.payload]),
  },
});

export const { getRates } = rateSlice.actions;
export default rateSlice.reducer;
