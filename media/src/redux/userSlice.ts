import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
}

interface UserState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  loginStatus: string | null;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
  loginStatus: "loggedOut",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      const { id, username, email } = action.payload;
      state.users.push({
        id,
        username,
        email,
      });
    },
    fetchUsers(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<string | null>) => {
      state.users = action.payload === null ? [] : [{ id: "", username: "", email: "" }];
      state.loginStatus = action.payload === null ? "loggedOut" : "loggedIn";
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setLogginStatus(state) {
      state.loginStatus = "loggedIn";
    },
  },
});

export const {
  addUser,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  setUser,
  setLoading,
  setError,
  setLogginStatus,
} = userSlice.actions;

export default userSlice.reducer;
