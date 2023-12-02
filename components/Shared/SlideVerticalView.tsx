import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { SlideVerticalViewProps } from "../../types";
import { height, width } from "../../constants";

function SlideVerticalView({ isVisible, children, delay}: SlideVerticalViewProps) {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
        delay:delay
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
            translateY: slideAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [height, 0],
            }),
          },
        ],
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        height: height,
        width: width,
        backgroundColor:'transparent'
      }}
    >
      <View>{children}</View>
    </Animated.View>
  );
}

export default SlideVerticalView;
