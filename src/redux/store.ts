import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cardReducer from "./reducers/cardReducer";
import { imageApiSlice } from "./reducers/imageApi";
import popupReducer from "./reducers/popupReducer";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
    popup: popupReducer,

    [imageApiSlice.reducerPath]: imageApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imageApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
