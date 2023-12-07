import React, { useState } from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { height, width } from "../../constants";
import ImageContainer from "../../components/Shared/ImageContainer";

interface Step {
  id: number;
  title: string;
  subTitle: string;
  content: ImageSourcePropType;
}

const StepList: React.FC<{
  steps: Step[];
  handleStepChange: (index: number) => void;
}> = ({ steps, handleStepChange }) => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onIndexChanged={handleStepChange}
      >
        {steps.map((step) => (
          <SafeAreaView style={styles.slide} key={step.id}>
            <View style={styles.subSlide}>
              <View>
                <Text style={styles.title}>{step.title}</Text>
                <Text style={styles.subTitle}>{step.subTitle}</Text>
              </View>

              <ImageContainer
                imageUrl={step.content}
                width={width * 0.4}
                height={height * 0.15}
              />
            </View>
          </SafeAreaView>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: height * 0.6 },
  wrapper: {},
  slide: {
    height: height * 0.6,
    display: "flex",
    backgroundColor: "transparent",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subSlide: {
    height: height * 0.4,
    display: "flex",
    backgroundColor: "transparent",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontFamily: "montserrat_bold",
    fontSize: 24,
    textAlign: "center",
    color: "#754730",
    width: 311,
    marginBottom: 5,
  },
  subTitle: {
    fontFamily: "montserrat_bold",
    fontSize: 12,
    textAlign: "center",
    color: "#CC9870",
    width: 311,
  },
  dot: {
    backgroundColor: "#D9D9D9",
    width: 15,
    height: 15,
    borderRadius: 99,
    marginLeft: 10,
    marginRight: 10,
  },
  activeDot: {
    backgroundColor: "#CC9870",
    width: 15,
    height: 15,
    borderRadius: 99,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default StepList;
