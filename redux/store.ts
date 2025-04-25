import { configureStore } from '@reduxjs/toolkit';

import contentReducer from '@redux/slices/contentSlice';
import authReducer from '@redux/slices/authSlice';
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;