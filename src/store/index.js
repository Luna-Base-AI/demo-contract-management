import { configureStore } from "@reduxjs/toolkit";
import contractTypesReducer from "./slices/contractTypesSlice";

export const store = configureStore({
  reducer: {
    contractTypes: contractTypesReducer,
  },
});

export default store;
