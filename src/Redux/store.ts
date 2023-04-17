import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import userDataSlice from './userDataSlice';
import {apiSlice} from './Api/apiSlice';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  userData: persistReducer(persistConfig, userDataSlice),
  [apiSlice.reducerPath]: apiSlice.reducer
})
const persistedReducer = persistReducer(persistConfig,rootReducer )
export const store = configureStore({
  reducer: persistedReducer,
  middleware:( getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
export const persistor = persistStore(store)
