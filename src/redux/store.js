import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';
import projectsReducer from './slices/projectsSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    projects: projectsReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;