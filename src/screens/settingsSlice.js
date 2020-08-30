import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    locationInput: "",
    searchedLocation: "",
    subscribedLocations: []
  },
  reducers: {
    updateLocationInput(state, action) {
      return { ...state, locationInput: action.payload };
    },
    updateSearchedLocation(state, action) {
      return { ...state, searchedLocation: state.locationInput };
    },
    subscribeToLocation(state, action) {
      const locationSet = new Set(state.subscribedLocations);
      locationSet.add(action.payload);
      return { ...state, subscribedLocations: [...locationSet] };
    },
    unsubscribeToLocation(state, action) {
      const locationSet = new Set(state.subscribedLocations);
      locationSet.delete(action.payload);
      return { ...state, subscribedLocations: [...locationSet] };
    }
  }
});

export const {
  updateLocationInput,
  updateSearchedLocation,
  subscribeToLocation,
  unsubscribeToLocation
} = settingsSlice.actions;

export default settingsSlice.reducer;
