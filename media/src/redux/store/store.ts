import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice.ts";
import postReducer from "../postSlice.ts";
import commentReducer from "../commentSlice.ts";
import counterReducer from "../counterSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    comment: commentReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
