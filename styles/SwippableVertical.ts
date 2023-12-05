import { DEFAULT_SHADOW } from './../constants/index';
import { StyleSheet } from "react-native";
import { height, width } from "../constants";

export const swipableVerticalStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: height,
    width: width,
    position: "absolute",
    ...DEFAULT_SHADOW
  },
});

export const pharmaDetailsStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: height,
    width: width,
    position: "absolute",
    ...DEFAULT_SHADOW
  },
});
