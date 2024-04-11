import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
    
    // other options like middleware, devTools, etc.
  });

sagaMiddleware.run(rootSaga);

export default store;