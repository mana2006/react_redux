import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: "",
        description: "",
        tag: 0,
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { createPost } = PostSlice.actions;
export default PostSlice.reducer;
