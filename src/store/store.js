import { configureStore } from "@reduxjs/toolkit";

import currencySlice from "./currencySlice";
import rateSlice from "./rateSlice";

export default configureStore({
  reducer: {
    currency: currencySlice,
    rate: rateSlice,
  },
});
