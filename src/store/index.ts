import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { themeReducer } from "./theme/theme.reducers";

const middleware: Array<Middleware> = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware,
});

export default store;
