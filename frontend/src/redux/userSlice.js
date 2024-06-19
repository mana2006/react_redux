import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "Hung",
    age: "30",
    about: "My name is Hung!",
    avaUrl: "https://cdn.pixabay.com/photo/2018/01/13/22/14/peacock-3080897_1280.jpg",
    themeColor: "#ff9051"
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    }
  }
})

export const { update } = UserSlice.actions;
export default UserSlice.reducer;
