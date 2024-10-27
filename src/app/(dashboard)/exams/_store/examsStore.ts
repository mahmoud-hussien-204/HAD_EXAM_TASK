import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {persistReducer, persistStore} from "redux-persist";

import storage from "redux-persist/lib/storage";

import examsSlice from "./examsSlice";

const reducers = combineReducers({
  examsReducer: persistReducer(
    {
      key: "exams",
      storage,
    },
    examsSlice
  ),
});

export const examsStore = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // fix error: A non-serializable value was detected in an action
      serializableCheck: false,
    }),
});

export const examsPersist = persistStore(examsStore);

// Infer the type of createAppStore
export type ExamsStore = ReturnType<typeof examsStore.getState>;

export type ExamsDispatch = typeof examsStore.dispatch;
