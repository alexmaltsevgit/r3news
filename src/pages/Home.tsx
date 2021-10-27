import React, { useEffect } from "react";
import HomeMain from "../layout/HomeMain/HomeMain.component";
import { useDispatch } from "react-redux";
import { ThemeActionType } from "../store/theme/theme.actions";
import Theme from "../types/Theme";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ThemeActionType.Set,
      payload: Theme.Light,
    });
  });
  return <HomeMain />;
};

export default Home;
