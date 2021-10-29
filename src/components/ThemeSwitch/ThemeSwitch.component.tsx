import React, { useState } from "react";
import { ThemeActionType } from "../../store/theme/theme.actions";
import Theme from "../../types/Theme";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Cookies } from "../../types/Cookies";
import { Sun } from "../../assets/images/Sun";
import { Moon } from "../../assets/images/Moon";
import { AppState } from "../../types/AppState";
import { StyledSwitch } from "./ThemeSwitch.style";

const ThemeSwitch = () => {
  const [cookies, setCookies] = useCookies([Cookies.Theme]);
  const [checked, setChecked] = useState(!!parseInt(cookies[Cookies.Theme]));
  const theme = useSelector((state: AppState) => state.theme);
  const dispatch = useDispatch();

  const handleChange = (checked: boolean) => {
    const actionType = ThemeActionType.Set;
    const theme = checked ? Theme.Dark : Theme.Light;

    dispatch({
      type: actionType,
      payload: theme,
    });

    setChecked((checked) => !checked);
    setCookies(Cookies.Theme, theme);
  };

  return (
    <StyledSwitch
      checked={checked}
      onChange={handleChange}
      checkedIcon={Sun}
      uncheckedIcon={Moon}
      onColor={theme.colors.secondary}
      onHandleColor={theme.colors.primary}
      offColor={theme.colors.secondary}
      offHandleColor={theme.colors.primary}
      height={30}
      width={70}
      handleDiameter={24}
    />
  );
};

export default ThemeSwitch;
