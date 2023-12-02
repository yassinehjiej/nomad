import React, { cloneElement, useEffect, useRef, useState } from "react";
import { Animated, PanResponder } from "react-native";
import { SwipableVerticalProps } from "../../types";
import { swipableVerticalStyles } from "../../styles/SwippableVertical";
import { swipeAction, swipeDown, swipeUp } from "../../utils/gestureActions";
import { useDispatch, useSelector } from "react-redux";
import { swipeAction as reset, setPanResponder } from "../../redux/actions";
import { height } from "../../constants";

const SwippableVertical = ({ children }: SwipableVerticalProps) => {
  const panY = useRef(new Animated.Value(height * 0.83)).current;
  const [offsetY, setOffsetY] = useState(0);
  const action = useSelector((state: any) => state.root.swipeAction);
  const dispatch = useDispatch();
  const panResponderEnabled = useSelector((state:any)=>state.root.panResponder);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => panResponderEnabled,
    onMoveShouldSetPanResponder: () => panResponderEnabled,
    onPanResponderMove: (_, gestureState) => {
      setOffsetY(offsetY + gestureState.dy);
    },
    onPanResponderRelease: (_) => {
      if (offsetY < 0) {
        swipeUp(panY, dispatch);
        dispatch(setPanResponder(false))
      } else if (offsetY > 0) {
        swipeDown(panY, dispatch);
      }
    },
  });

  useEffect(() => {
    swipeAction(action, panY, dispatch);
  }, [action]);

  return (
    <Animated.View
      style={[
        swipableVerticalStyles.container,
        {
          transform: [{ translateY: panY }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};

export default SwippableVertical;
