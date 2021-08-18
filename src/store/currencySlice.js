import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: [],
  reducers: {
    getCurrencies: (state, action) => (state = [...action.payload]),
  },
});

export const { getCurrencies } = currencySlice.actions;
export default currencySlice.reducer;
