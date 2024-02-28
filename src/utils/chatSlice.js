import { createSlice } from "@reduxjs/toolkit";
const LIVECHAT_COUNT = 25;

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(LIVECHAT_COUNT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
