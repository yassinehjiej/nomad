import React from "react";
import { View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Make sure to import the AntDesign component
import { SearchInputProps } from "../../types";

const SearchInput = (props: SearchInputProps) => {
  const {
    containerStyle,
    inputStyle,
    iconStyle,
    subject,
    handleFocus,
    onChange,
  } = props;

  return (
    <View style={[containerStyle]}>
      <TextInput
        style={[inputStyle]}
        inputMode="search"
        placeholder={`Rechercher ${subject}`}
        placeholderTextColor={inputStyle?.color}
        onFocus={handleFocus}
        onChange={(e) => onChange(e)}
      />
      <AntDesign name="search1" size={24} color="gray" style={[iconStyle]} />
    </View>
  );
};

export default SearchInput;
