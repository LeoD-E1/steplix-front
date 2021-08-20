import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: [],
  reducers: {
    setCurrencies: (state, action) => (state = [...action.payload]),
  },
});

export const { setCurrencies } = currencySlice.actions;
export default currencySlice.reducer;
