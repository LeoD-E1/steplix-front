import { createSlice } from "@reduxjs/toolkit";

const rateSlice = createSlice({
  name: "rate",
  initialState: [],
  reducers: {
    setRates: (state, action) => (state = [...action.payload]),
  },
});

export const { setRates } = rateSlice.actions;
export default rateSlice.reducer;
