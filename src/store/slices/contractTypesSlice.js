import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    contractCode: "",
    contractName: "",
    status: "",
    creator: "",
    dateRange: null,
  },
  pagination: {
    current: 1,
    pageSize: 10,
    total: 0,
  },
};

const contractTypesSlice = createSlice({
  name: "contractTypes",
  initialState,
  reducers: {
    setContractTypes: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const {
  setContractTypes,
  setLoading,
  setError,
  setFilters,
  setPagination,
} = contractTypesSlice.actions;

export default contractTypesSlice.reducer;
