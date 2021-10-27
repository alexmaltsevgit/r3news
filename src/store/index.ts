import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { themeReducer } from "./theme/theme.reducers";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: [logger],
});

export default store;
