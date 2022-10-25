import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import { RootState } from "../store";

export interface Card {
  id: string | undefined;
  name: string;
}

interface CardState {
  value: Card[];
}

const initialState: CardState = {
  value: [],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      const payload = action.payload;
      payload.id = uniqid("card-");

      state.value.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;
export const selectCards = (state: RootState) => state.cards.value;
export default cardSlice.reducer;
