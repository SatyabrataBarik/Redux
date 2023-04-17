import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import userDataSlice from './userDataSlice';
import {apiSlice} from './Api/apiSlice';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import { persistReducer, persistStore } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
const rootReducer=combineReducers({
  userData: userDataSlice,
  [apiSlice.reducerPath]: apiSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:( getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
export const persistor = persistStore(store)