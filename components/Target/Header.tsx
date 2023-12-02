import { Image } from "react-native";
import React from "react";
import { BACKGROUND_TARGET, height } from "../../constants";
import SearchInput from "../Shared/SearchInput";
import { targetStyles } from "../../styles/Target";
import HorizontalList from "../Shared/HorizontalList";

export default function Header() {
  const {
    targetSearchBarContainer,
    targetSeachBarTextInput,
    targetSearchBarIcon,
  } = targetStyles;

  const data = ["Item 1", "Item 3", "Item 5"];

  return (
    <>
      <Image
        source={BACKGROUND_TARGET}
        style={{ position: "absolute", height: height / 3 }}
      />
      <SearchInput
        containerStyle={targetSearchBarContainer}
        inputStyle={targetSeachBarTextInput}
        iconStyle={targetSearchBarIcon}
        subject="medicament"
      />
      <HorizontalList data={data} />
    </>
  );
}
