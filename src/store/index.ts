import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../slices";

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;

export default store;