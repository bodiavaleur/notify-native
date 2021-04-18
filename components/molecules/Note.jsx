import React from "react";
import { NoteItemHeader, NoteItemUI } from "../../ui/molecules";
import { NoteText, NoteTime, NoteTitle } from "../../ui/atoms";
import { TouchableOpacity } from "react-native";

export function Note({ item, onPress }) {
  const [noteDate] = new Date(item.dateChanged).toLocaleString().split(",");

  return (
    <TouchableOpacity onPress={onPress}>
      <NoteItemUI>
        <NoteItemHeader>
          <NoteTitle>{item.title}</NoteTitle>
          <NoteTime>{noteDate}</NoteTime>
        </NoteItemHeader>
        <NoteText>{item.text}</NoteText>
      </NoteItemUI>
    </TouchableOpacity>
  );
}
