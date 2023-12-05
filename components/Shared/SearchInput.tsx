import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Make sure to import the AntDesign component
import { SearchInputProps } from "../../types";
import { MARK_ICON } from "../../constants";

const SearchInput = (props: SearchInputProps) => {
  const {
    containerStyle,
    inputStyle,
    iconStyle,
    subject,
    handleFocus,
    onChange,
    icon
  } = props;

  return (
    <View style={[containerStyle]}>
      <TouchableOpacity   style={{...inputStyle, flexDirection:'row', display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}} onPress={handleFocus as any}>
        <Text style={{fontWeight:'bold'}}>{subject}</Text>
        <Image
            source={icon}
            style={{width:30, height:30, marginLeft:10}}
          />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
