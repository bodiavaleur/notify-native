import React from "react";
import { AppHeader } from "../organisms";
import { SafeAreaView } from "react-native";
import { PageTemplateUI } from "../../ui/templates";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { useSelector } from "react-redux";

export function AppTemplate({ children }) {
  const appTheme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <PageTemplateUI>
        <SafeAreaView>
          <AppHeader />
          {children}
        </SafeAreaView>
      </PageTemplateUI>
    </ThemeProvider>
  );
}
