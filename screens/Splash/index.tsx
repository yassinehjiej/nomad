import React, { useEffect, useState } from "react";
import { splashStyles } from "../../styles/Splash";
import { SplashScreenProps } from "../../types";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import { setCurrentLocation, setDesiredLocation } from "../../redux/actions";
import { Text, View } from "react-native";
import { loadFonts } from "../../utils/fontLoader";
import ImageContainer from "../../components/Shared/ImageContainer";
import { NOMAD, height, width } from "../../constants";

function Splash({ onAppReady }: SplashScreenProps) {
  const [splashIsReady, setSplashIsReady] = useState(false);
  const dispatch = useDispatch();
  const [font, setFont] = useState(false)

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

  if(!font) {
    loadFonts().then(()=>{
      setFont(true)
    });
    return;
  }
  return (
    <View style={splashStyles.container}>
       <ImageContainer
            imageUrl={NOMAD}
            width={width * 0.5}
            height={height * 0.4}
            resizeMode='cover'
          />
          {/* {font && <Text style={{color:'white', fontFamily:'montserrat_bold', fontSize:38}}>Nomad</Text>} */}
    </View>
  );
}

export default Splash;
