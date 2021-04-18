import React from "react";
import { ActionPanelUI } from "../../ui/molecules";
import { Button } from "../atoms/";

export function EditActionPanel({ removeAction, saveAction }) {
  return (
    <ActionPanelUI>
      <Button title="Remove" onPress={removeAction} />
      <Button title="Save" onPress={saveAction} />
    </ActionPanelUI>
  );
}
