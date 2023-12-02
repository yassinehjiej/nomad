import { View, Text } from "react-native";
import React from "react";
import { width } from "../../../constants";

export default function Title() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "montserrat_bold",
          fontSize: 24,
          width: 311,
          textAlign: "center",
          alignSelf: "center",
          paddingBottom: 10,
        }}
      >
        Welcome to Places AI
      </Text>
      <View style={{width:width*0.3, height:1, backgroundColor:"#000000", alignSelf:'center', margin:15}}/>
    </View>
  );
}
