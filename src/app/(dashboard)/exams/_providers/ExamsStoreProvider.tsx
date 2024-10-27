"use client";

import {examsPersist, examsStore} from "@/app/(dashboard)/exams/_store/examsStore";

import LoadingScreen from "@/components/LoadingScreen";

import {Provider} from "react-redux";

import {PersistGate} from "redux-persist/integration/react";

const ExamsStoreProvider = ({children}: React.PropsWithChildren) => {
  return (
    <Provider store={examsStore}>
      <PersistGate loading={<LoadingScreen />} persistor={examsPersist}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ExamsStoreProvider;
