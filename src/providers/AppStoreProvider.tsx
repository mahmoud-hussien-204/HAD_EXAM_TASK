"use client";

import {authSliceActions} from "@/app/(auth)/slice";

import {AppStore, createAppStore} from "@/store/appStore";

import {useRef} from "react";

import {Provider} from "react-redux";

interface IProps extends Required<React.PropsWithChildren> {
  user: IUser | null;
}

const AppStoreProvider = ({children, user}: IProps) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createAppStore();
    if (user) {
      const initialAuthState = {
        isAuthenticated: true,
        userData: user,
      };
      storeRef.current.dispatch(authSliceActions.setInitialState(initialAuthState));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default AppStoreProvider;
