import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducer';
import rootMiddleware from '../middlewares';

const preloadedState = {

  message: 'Une jolie app avec react V18 et redux !',
  messageMain: 'Le message de mon main.'
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [rootMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
