import React from "react";
import { Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions";

export function ThemeSwitch() {
  const isDarkTheme = useSelector((state) => state.theme === "dark");
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTheme());

  return <Switch onValueChange={handleToggle} value={isDarkTheme} />;
}
