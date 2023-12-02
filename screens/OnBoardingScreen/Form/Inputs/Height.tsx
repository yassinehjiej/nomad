import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { InputFormOnBoardingProps } from "../../../../types";

export default function Height({ handleUser }: InputFormOnBoardingProps) {
  const [height, setHeight] = useState(170);

  const handleHeight = (type: string) => {
    if (type === "minus") {
      handleUser("height", `${height - 1}`);
      setHeight(height - 1);
    } else {
      handleUser("height", `${height + 1}`);
      setHeight(height + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Taille</Text>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleHeight("minus");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "montserrat_bold",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#00C3A5",
            height: 38,
            width: 99,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius:5
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "white",
              fontFamily: "montserrat_bold",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {height} cm
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleHeight("plus")}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "montserrat_bold",
            }}
          >
            +
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
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
  },
  body: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderRadius: 99,
    backgroundColor: "#1F4C45",
    width: 38,
    height: 38,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});
