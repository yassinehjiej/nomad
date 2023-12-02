import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { FadeInViewProps } from '../../types';

const FadeInView: React.FC<FadeInViewProps> = ({ children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,         
      duration: 1000,   
      easing: Easing.ease,  
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
