import { DEFAULT_SHADOW } from './../constants/index';
import { StyleSheet } from "react-native";
import { height, width } from "../constants";

export const pharmaListStyles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: width,
    height: height,
  },
  header: {
    width: width * 0.9,
    height: height / 15,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignSelf: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    display: "flex",
    alignItems: "center",
  },
  headerButtons: {
    height: height / 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "auto",
    backgroundColor: "black",
    borderRadius: 10,
  },
  headerButtonsSwitchWrapper: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width * 0.33,
    ...DEFAULT_SHADOW
  },
  searchPart: {
    display: "flex",
    width: width,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    alignSelf: "center",
  },
  searchPartTextCancel: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    width: width * 0.2,
  },
  searchBarContainer: {
    display: "flex",
    width: "auto",
    minWidth: "auto",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginVertical: 20,
  },
  seachBarTextInput: {
    color: "#4C4C4D",
    height: 40,
    width: width,
    borderColor: "#242426",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#242426",
    fontSize: 18,
    padding: 10,
  },
  searchBarIcon: {
    position: "absolute",
    right: 10,
    color: "#4C4C4D",
  },
  hook: {
    backgroundColor: "gray",
    width: width * 0.15,
    height: 3,
    margin: 10,
    borderRadius: 20,
    alignSelf: "center",
    opacity:0.4
  },
});
