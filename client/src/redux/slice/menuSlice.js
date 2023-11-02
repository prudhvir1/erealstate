import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarMenu: false,
  profileMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    sidebarMenu: (state, action) => {
      state.sidebarMenu = action.payload;
    },
    profileMenu: (state, action) => {
      state.profileMenu = action.payload;
    },
  },
});
export const { sidebarMenu, profileMenu } = menuSlice.actions;

export default menuSlice.reducer;
