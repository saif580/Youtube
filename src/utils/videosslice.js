import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
  },
  reducers: {
    addInitialAndSearchVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addInitialAndSearchVideos } = videosSlice.actions;
export default videosSlice.reducer;
