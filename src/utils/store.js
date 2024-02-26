import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./searchslice";

const store = configureStore({
  reducer: { app: appslice, search: searchslice },
});

export default store;
