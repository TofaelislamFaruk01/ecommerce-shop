import { Product } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const FavoriteSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const exists = state?.find((product) => product.id === action.payload.id);
      if (!exists) {
        state.push({ ...action.payload });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      return state?.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
