import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { InputFormOnBoardingProps } from "../../../../types";

export default function Gender({ handleUser }: InputFormOnBoardingProps) {
  const [gender, setGender] = useState<String | null>("female");

  return (
    <View style={styles.container}>
      <Text>Gender</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          height: 40,
        }}
      >
        <TouchableOpacity
          style={{
            ...styles.gender,
            backgroundColor: gender === "female" ? "#5986AC" : "transparent",
          }}
          onPress={() => {
            handleUser("gender", "female");
            setGender("female");
          }}
        >
          <Text
            style={{
              color: gender === "female" ? "white" : "black",
              fontFamily: "montserrat_bold",
            }}
          >
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.gender,
            backgroundColor: gender === "male" ? "#00C3A5" : "transparent",
          }}
          onPress={() => {
            handleUser("gender", "male");
            setGender("male");
          }}
        >
          <Text
            style={{
              color: gender === "male" ? "white" : "black",
              fontFamily: "montserrat_bold",
            }}
          >
            Male
          </Text>
        </TouchableOpacity>
      </View>
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
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "gray",
  },
  gender: {
    width: "50%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "transparent",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
