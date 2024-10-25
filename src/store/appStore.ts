import authReducer from "@/app/(auth)/slice";

import {configureStore} from "@reduxjs/toolkit";

export const createAppStore = () =>
  configureStore({
    reducer: {
      authReducer,
    },
  });

// Infer the type of createAppStore
export type AppStore = ReturnType<typeof createAppStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
