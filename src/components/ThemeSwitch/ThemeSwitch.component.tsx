import React, { useState } from "react";
import Switch from "react-switch";
import { ThemeActionType } from "../../store/theme/theme.actions";
import Theme from "../../types/Theme";
import { useDispatch } from "react-redux";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (checked: boolean) => {
    const actionType = ThemeActionType.Set;
    const theme = checked ? Theme.Dark : Theme.Light;

    setChecked((checked) => !checked);
    dispatch({
      type: actionType,
      payload: theme,
    });
  };

  return <Switch checked={checked} onChange={handleChange} />;
};

export default ThemeSwitch;
