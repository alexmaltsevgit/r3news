import { ThemeAction, ThemeActionType } from "./theme.actions";
import light from "../../themes/light";
import dark from "../../themes/dark";
import Theme from "../../types/Theme";
import { getCookie } from "../../utils/cookies";
import { Cookies } from "../../types/Cookies";

const getThemeScheme = (theme: Theme | null) => {
  switch (theme) {
    case Theme.Light:
      return light;
    case Theme.Dark:
      return dark;
    default:
      return light;
  }
};

const initialTheme = getThemeScheme(
  parseInt(getCookie(Cookies.Theme)) as Theme
);

export const themeReducer = (state = initialTheme, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionType.Set:
      return getThemeScheme(action.payload as Theme);
    default:
      return state;
  }
};
