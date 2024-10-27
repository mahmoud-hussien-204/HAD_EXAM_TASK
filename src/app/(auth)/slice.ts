// authSlice.ts
import {EnumAppKeys} from "@/enums";
import CookiesHelper from "@/helpers/CookiesHelper";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
  isAuthenticated: boolean;
  userData: IUser | null;
}

const initialState: InitialState = {
  isAuthenticated: false,
  userData: null,
};

const slice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    setInitialState(state, action: PayloadAction<InitialState>) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userData = action.payload.userData;
    },
    login(state, action: PayloadAction<IUser>) {
      state.isAuthenticated = true;
      state.userData = action.payload;
      CookiesHelper.setCookie(EnumAppKeys.USER_DATA, action.payload);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
      CookiesHelper.deleteCookie(EnumAppKeys.USER_DATA);
      window.location.pathname = "/auth";
    },
  },
});

export const authSliceActions = slice.actions;

export default slice.reducer;
