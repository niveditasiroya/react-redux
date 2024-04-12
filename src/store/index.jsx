import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./slices/UserSlice";

const Store = configureStore({
  reducer: {
    users: userSlices,
  },
});

export default Store;
