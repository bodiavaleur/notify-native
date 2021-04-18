import React from "react";
import { Title } from "../../ui/atoms";
import { AppTemplate } from "../templates";
import { WelcomePageUI } from "../../ui/pages";
import { Button } from "../atoms";

export function WelcomePage({ navigation }) {
  return (
    <AppTemplate>
      <WelcomePageUI>
        <Title>Welcome!</Title>
        <Button
          title="Open notes"
          onPress={() => navigation.navigate("Notes")}
        />
      </WelcomePageUI>
    </AppTemplate>
  );
}
