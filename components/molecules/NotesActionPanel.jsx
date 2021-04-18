import React from "react";
import { ActionPanelUI } from "../../ui/molecules";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions";
import { Search, Button } from "../atoms";

export function NotesActionPanel() {
  const dispatch = useDispatch();

  const handleAddNote = () => dispatch(addNote());

  return (
    <ActionPanelUI>
      <Search />
      <Button title="Add" onPress={handleAddNote} />
    </ActionPanelUI>
  );
}
