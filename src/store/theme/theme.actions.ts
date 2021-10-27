import Theme from "../../types/Theme";

export enum ThemeActionType {
  Set,
}

export type ThemeAction = {
  type: ThemeActionType;
  payload?: Theme; // expand type if needed
};

export const setTheme = (theme: Theme): ThemeAction => ({
  type: ThemeActionType.Set,
  payload: theme,
});
