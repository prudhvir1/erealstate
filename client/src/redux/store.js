import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice.js";
import menuReducer from "./slice/menuSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
});
