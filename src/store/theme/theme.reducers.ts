import { ThemeAction, ThemeActionType } from "./theme.actions";
import light from "../../themes/light";
import dark from "../../themes/dark";
import Theme from "../../types/Theme";

const getTheme = (theme: Theme) => {
  switch (theme) {
    case Theme.Light:
      return light;
    case Theme.Dark:
      return dark;
    default:
      throw new Error("Can't happen");
  }
};

export const themeReducer = (state = { theme: light }, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionType.Set:
      const theme = getTheme(action.payload as Theme);
      return {
        ...state,
        theme,
      };
    default:
      return state;
  }
};
