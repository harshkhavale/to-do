// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'; // Import persistStore
import storage from 'redux-persist/lib/storage';
import taskReducer from './taskSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store); // Export persistor

export default store;
