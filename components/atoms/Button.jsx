import React from "react";
import { theme } from "../../theme";
import { Button as NativeButton } from "react-native";
import { useSelector } from "react-redux";

export function Button(props) {
  const appTheme = useSelector((state) => state.theme);
  return <NativeButton {...props} color={theme[appTheme].primaryColor} />;
}
