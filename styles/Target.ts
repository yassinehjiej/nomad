import { StyleSheet } from "react-native";
import { height, width } from "../constants";

export const targetStyles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  targetSearchBarContainer: {
    display: "flex",
    marginBottom: 80,
    width: width - 80,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginTop: height / 30,
  },
  targetSeachBarTextInput: {
    height: 40,
    width: width - 80,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: 18,
    padding: 10,
  },
  targetSearchBarIcon: {
    position: "absolute",
    right: 10,
  },
  bodyContainer: {
    display: "flex",
    width: "95%",
    height: "70%"
  },
});
