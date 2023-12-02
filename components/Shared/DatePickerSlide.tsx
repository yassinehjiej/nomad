import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { SlideVerticalViewProps } from "../../types";
import { height, width } from "../../constants";
import DateTimePicker from "@react-native-community/datetimepicker";

function DatePickerSlide({ isVisible, date, maxDate, onChange }: any) {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
        delay: 0,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: slideAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [width, 0],
            }),
          },
        ],
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        height: "100%",
        width: width,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        maximumDate={maxDate}
        onChange={onChange}
        display="inline"
        style={{ backgroundColor: "white" }}
      />
    </Animated.View>
  );
}

export default DatePickerSlide;
