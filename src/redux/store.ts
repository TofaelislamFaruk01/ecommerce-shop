import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themes/themeSlice";
import favoriteProductReducer from "./favorites/favoriteSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    favoriteProducts: favoriteProductReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
