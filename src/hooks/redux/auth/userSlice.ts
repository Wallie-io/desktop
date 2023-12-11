import { createSlice } from "@reduxjs/toolkit";

interface User {
    userId: string | null
    username: string | null;
}

const getUsernameFromCookie = () => {
    return document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, "$1");
  };

const initialState: User = {
    userId: null,
    username: getUsernameFromCookie() || null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload;
          },

        setUsername: (state, action) => {
            state.username = action.payload;
            document.cookie = `username=${action.payload}; path=/;`;
        },

        clearUsername: (state) => {
            state.username = null;
            document.cookie = 'username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
          }, 
    }
})

export const { setUserId, setUsername, clearUsername } = userSlice.actions;
export const selectUserId = (state: { user: User }) => state.user.userId;
export const selectUsername = (state: { user: User }) => state.user.username;

export default userSlice.reducer;