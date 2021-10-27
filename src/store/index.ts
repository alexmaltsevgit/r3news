import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { themeReducer } from "./theme/theme.reducers";
import light from "../themes/light";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: [logger],
  preloadedState: {
    theme: light,
  },
});

export default store;
