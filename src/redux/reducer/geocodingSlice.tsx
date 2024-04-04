import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { geocodingAPI } from "../../api/geocodingAPI";

export const fetchGeocodingData = createAsyncThunk(
  "geocoding/fetchGeocodingData",
  async (search) => {
    const response = await geocodingAPI.fetchGeocoding(search);
    //console.log("respone", response);
    return response;
  }
);
const initialState = {
  geocoding: [],
  status: "",
  error: null,
};

const geocodingSlice = createSlice({
  name: "geocoding",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeocodingData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGeocodingData.fulfilled, (state, action) => {
        state.status = "idle";
        state.geocoding = action.payload;
        // console.log("action", action);
      })
      .addCase(fetchGeocodingData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // console.log("action", action.error.message);
      });
  },
});
export const getGeocoding = (state) => state.geocoding.geocoding;
export const getGeocodingStatus = (state) => state.geocoding.status;

export default geocodingSlice.reducer;
