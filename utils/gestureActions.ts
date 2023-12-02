import { Animated, Keyboard, LayoutAnimation } from "react-native";
import { height, UP, DOWN } from "../constants";
import { showFilters, swipeAction as reset } from "../redux/actions";

export const swipeUp = (panY: Animated.Value, dispatch: any) => {
  Animated.spring(panY, {
    toValue: 0,
    useNativeDriver: false,
    bounciness: 0,
    speed: 10,
  }).start();
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  dispatch(showFilters(false));
  dispatch(reset(""));
};

export const swipeDown = (panY: Animated.Value, dispatch: any) => {
  Animated.spring(panY, {
    toValue: height * 0.83,
    speed: 10,
    bounciness: 0,
    useNativeDriver: false,
  }).start();
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  dispatch(showFilters(true));
  dispatch(reset(""));
  Keyboard.dismiss();
};

export const swipeAction = (
  action: string,
  panY: Animated.Value,
  dispatch: any
) => {
  switch (action) {
    case UP:
      swipeUp(panY, dispatch);
      break;
    case DOWN:
      swipeDown(panY, dispatch);
      break;
    default:
      break;
  }
};


//gestures  for pharmaDetails

export const swipeUpPharma = (panY: Animated.Value) => {
  Animated.spring(panY, {
    toValue: height*0.63,
    useNativeDriver: false,
    bounciness: 0,
    speed: 10,
  }).start();
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export const swipeDownPharma = (panY: Animated.Value) => {
  Animated.spring(panY, {
    toValue: height,
    speed: 10,
    bounciness: 0,
    useNativeDriver: false,
  }).start();
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  Keyboard.dismiss();
};

export const swipeActionPharma = (
  action: string,
  panY: Animated.Value,
) => {
  switch (action) {
    case UP:
      swipeUpPharma(panY);
      break;
    case DOWN:
      swipeDownPharma(panY);
      break;
    default:
      break;
  }
};