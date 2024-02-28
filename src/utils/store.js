import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchslice from "./searchslice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosslice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchslice,
    chat: chatSlice,
    videos: videosSlice,
  },
});

export default store;
