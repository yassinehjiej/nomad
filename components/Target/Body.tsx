import { SafeAreaView } from "react-native";
import React from "react";
import { targetStyles } from "../../styles/Target";
import TwoItemsPerLineList from "../Shared/TwoItemPerLineList";

const { bodyContainer } = targetStyles;
const data = [
    ['Item 1', 'Item 2'],
    ['Item 3', 'Item 4'],
    ['Item 5', 'Item 6'],
    ['Item 1', 'Item 2'],
    ['Item 3', 'Item 4'],
    ['Item 5', 'Item 6'],
    ['Item 1', 'Item 2'],
    ['Item 3', 'Item 4'],
    ['Item 5', 'Item 6'],
    // Add more pairs of items as needed
  ];

export default function Body() {
  return (
    <SafeAreaView style={bodyContainer}>
      <TwoItemsPerLineList data={data}/>
    </SafeAreaView>
  );
}
