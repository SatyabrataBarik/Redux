import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import userDataSlice from './userDataSlice';
import {apiSlice} from './Api/apiSlice';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {userData: userDataSlice, [apiSlice.reducerPath]: apiSlice.reducer},
  middleware:( getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
