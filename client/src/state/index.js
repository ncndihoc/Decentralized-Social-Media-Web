import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: "light",
  user:null,
  toekn:null,
  posts: [],

};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMoode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFirends: (state, action) => {
      if(state.user){
        state.user.friends = action.payload.friends;
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        }
        return post;
      });
      state.posts = updatedPosts;
    }
  },
});

export const { setMoode, setLogin, setLogout, setFirends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;
