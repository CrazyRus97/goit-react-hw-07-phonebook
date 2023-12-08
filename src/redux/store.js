import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import persistedAuthReducer from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// дані з локал сторіджа потрапляли відразу в redux під час завантаження
export const persistor = persistStore(store);