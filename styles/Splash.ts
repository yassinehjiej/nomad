import { StyleSheet } from "react-native";
import { height, width } from "../constants";

export const splashStyles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
