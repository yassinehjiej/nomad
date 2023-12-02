import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { InputFormOnBoardingProps } from "../../../../types";
import { DEFAULT_SHADOW, width } from "../../../../constants";

export default function LastName({ handleUser }: InputFormOnBoardingProps) {
  return (
    <View style={styles.container}>
      <Text>Last name</Text>
      <TextInput
        style={styles.textInput}
        onChange={(e) => handleUser("lastName", e.nativeEvent.text)}
        placeholder="Doe"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    height: 80,
    marginBottom: 20,
  },
  textInput: {
    width: "95%",
    height: 40,
    alignSelf:'center',
    borderColor: "#B2B2B2",
    ...DEFAULT_SHADOW,
    borderRadius: 20,
    paddingLeft:5,
    backgroundColor: "white",
  
  },
});
