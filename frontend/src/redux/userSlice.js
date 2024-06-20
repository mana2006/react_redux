import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "Hung",
    age: "30",
    about: "My name is Hung!",
    avaUrl: "https://cdn.pixabay.com/photo/2018/01/13/22/14/peacock-3080897_1280.jpg",
    themeColor: "#ff9051",
    pending: false,
    error: false
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    }
  }
})

export const { updateStart, updateError, updateSuccess } = UserSlice.actions;
export default UserSlice.reducer;
