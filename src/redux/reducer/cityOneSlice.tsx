import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cityOneData: null,
  cityOneStatus: "",
  cityOneError: null,
};

// City One sayfası için dilim oluşturma
const cityOneSlice = createSlice({
  name: "cityOne",
  initialState,
  reducers: {
    setCityOneData(state, action) {
      state.cityOneData = action.payload;
    },
    setCityOneStatus(state, action) {
      state.cityOneStatus = action.payload;
    },
    setCityOneError(state, action) {
      state.cityOneError = action.payload;
    },
  },
  extraReducers: (builder) => {
    // City One sayfasına özgü async ekstra reducers buraya eklenebilir
  },
});

export const { setCityOneData, setCityOneStatus, setCityOneError } =
  cityOneSlice.actions;

export default cityOneSlice.reducer;
