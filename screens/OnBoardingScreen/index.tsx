import {
  SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { OnBoardingScreenProps } from "../../types";
import { width } from "../../constants";
import Title from "./Sections/Title";
import Form from "./Form";
import FadeInView from "../../components/Shared/FadeInView";

export default function OnBoardingScreen({
  handleOnboarding,
}: OnBoardingScreenProps) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: "flex",
        backgroundColor: "transparent",
        width: width * 0.85,
        justifyContent:'space-around',
        alignSelf: "center",
      }}
    >
      <FadeInView>
        <Title />
        <Form handleOnboarding={handleOnboarding} />
      </FadeInView>
    </SafeAreaView>
  );
}