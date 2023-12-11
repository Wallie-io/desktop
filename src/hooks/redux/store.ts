import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../redux/auth/userSlice';

const rootReducer = combineReducers({
  user: userReducer
  // ... other reducers
});

export default rootReducer;