import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PopupState {
  visible: boolean;
}

const initialState: PopupState = {
  visible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopup: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});

export const { setPopup } = popupSlice.actions;
export const selectPopup = (state: RootState) => state.popup.visible;
export default popupSlice.reducer;
