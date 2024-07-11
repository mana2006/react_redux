import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import PostSlice from "./postSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    post: PostSlice,
  },
});
