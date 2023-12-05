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
    icon = ''
  } = props;

  return (
    <TouchableOpacity style={[containerStyle]} onPress={handleFocus as any}>
      <TouchableOpacity   style={{...inputStyle, flexDirection:'row', display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}} >
        <Text style={{fontWeight:'bold'}}>{subject}</Text>
       {icon &&  <Image
            source={icon}
            style={{width:30, height:30, marginLeft:10}}
          />}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SearchInput;
