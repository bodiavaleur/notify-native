import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/actions";
import { Input } from "../../ui/atoms";
import { theme } from "../../theme";

export function Search() {
  const [query, setQuery] = useState("");
  const appTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(query));
  }, [query]);

  const handleSearch = (text) => setQuery(text);

  return (
    <Input
      placeholder="Search"
      onChangeText={handleSearch}
      placeholderTextColor={theme[appTheme].lightGray}
    />
  );
}
