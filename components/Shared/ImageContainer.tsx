import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Platform,
} from "react-native";
import { DEFAULT_SHADOW } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  imageUrl: ImageSourcePropType;
  width: number;
  height: number;
  resizeMode?: any;
}

const ImageContainer = ({ imageUrl, width, height, resizeMode = 'contain' }: Props) => {
  return (
    <SafeAreaView style={{...styles.container, width:width, height:height}}>
      <Image source={imageUrl} style={{...styles.image, resizeMode:resizeMode}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent',
    DEFAULT_SHADOW,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius:10
  
  },
});

export default ImageContainer;
