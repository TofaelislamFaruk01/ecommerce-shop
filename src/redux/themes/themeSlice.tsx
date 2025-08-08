import { COLOR_MODE } from "@/enums";
import { Theme, ThemeState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
  mode: COLOR_MODE.LIGHT,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode =
        state.mode === COLOR_MODE.LIGHT ? COLOR_MODE.DARK : COLOR_MODE.LIGHT;
    },
    setTheme(state, action: { payload: Theme }) {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
