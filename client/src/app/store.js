import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/AuthSlice';
import goalReducer from '../features/Goals/GoalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer
  },
});
