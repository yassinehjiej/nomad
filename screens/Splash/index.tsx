import React, { useEffect, useState } from "react";
import FadeInView from "../../components/Shared/FadeInView";
import { splashStyles } from "../../styles/Splash";
import { SplashScreenProps } from "../../types";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setCurrentLocation, setDesiredLocation } from "../../redux/actions";
import { Video, ResizeMode } from 'expo-av';
import { LOGO, height, width } from "../../constants";
import { View } from "react-native";
import ImageContainer from "../../components/Shared/ImageContainer";

function Splash({ onAppReady }: SplashScreenProps) {
  const [splashIsReady, setSplashIsReady] = useState(false);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3750));
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync({});
          dispatch(
            setCurrentLocation({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            })
          );
          dispatch(
            setDesiredLocation({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            })
          );
        } else {
          console.error("Location permission denied");
        }
      } catch (error) {
        console.error("Error requesting location:", error);
      }
      setSplashIsReady(!splashIsReady);
      onAppReady();
    };

    prepare();
  }, [onAppReady]);

  return (
    <View style={splashStyles.container}>
         {/* <Video
        ref={video}
        style={{width:width, height:200}}
        source={require('../../assets/blanc.mp4')}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> */}
       <ImageContainer
            imageUrl={LOGO}
            width={width * 0.5}
            height={height * 0.15}
            resizeMode='center'
          />
    </View>
  );
}

export default Splash;
