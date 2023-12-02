import { StyleSheet } from 'react-native';
import { height, width } from '../constants';

export const mainStyles = StyleSheet.create({
  container: {
    width: width,
    height: height + 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});
