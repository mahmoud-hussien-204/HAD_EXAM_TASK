import type {AppDispatch, RootState} from "@/store/appStore";

import {useDispatch, useSelector} from "react-redux";

export const useAppStoreDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppStoreSelector = useSelector.withTypes<RootState>();
