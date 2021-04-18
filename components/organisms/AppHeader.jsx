import React from "react";
import { TopTitle } from "../../ui/atoms";
import { HeaderPanelUI } from "../../ui/organisms";
import { ThemeSwitch } from "../atoms";

export function AppHeader() {
  return (
    <HeaderPanelUI>
      <TopTitle primary>Notify</TopTitle>
      <ThemeSwitch />
    </HeaderPanelUI>
  );
}
