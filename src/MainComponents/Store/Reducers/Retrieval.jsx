import { createSlice } from "@reduxjs/toolkit";
import { Retrieval } from "../Apis/Retrieval";

export const RetrievalSlice = createSlice({
  name: "retrieval",
  initialState: {
    retrieval: null,
    authenticatingretrieval: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.retrieval = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingretrieval = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Retrieval.fulfilled, (state, action) => {
      state.retrieval = action.payload;
      state.authenticated = false;
      state.authenticatingretrieval = false;
      return state;
    });
    builder.addCase(Retrieval.pending, (state, action) => {
      state.authenticatingretrieval = true;
      state.authenticated = true;
    });
    builder.addCase(Retrieval.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingretrieval = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = RetrievalSlice.actions;

export const RetrievalSelector = (state) => state.retrieval;
