import { createSlice } from "@reduxjs/toolkit";

export const AppScreens = {
  DASHBOARD: "DASHBOARD",
  STATISTICS: "STATISTICS",
  MAP: "MAP",
  SETTINGS: "SETTINGS"
};

const filtersSlice = createSlice({
  name: "visibilityFilters",
  initialState: AppScreens.DASHBOARD,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload;
    }
  }
});

export const { setVisibilityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
