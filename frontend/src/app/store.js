import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import meetupReducer from '../features/meetups/meetupsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meetups: meetupReducer
  },
  devTools: true,
  trace: true
});
