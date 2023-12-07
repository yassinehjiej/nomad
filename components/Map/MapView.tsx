import React, { useEffect, useMemo, useState } from "react";
import MapView, {
  Callout,
  MapCallout,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import {
  Image,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Text,
} from "react-native";
import withFadeInView from "../Shared/WithFadeInView";
import { mapStyles } from "../../styles/Map";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  ALMAKAN,
  DRUG_STORE_PIN,
  ECOLODGE,
  KHALTI,
  LOCATE_PIN,
  height,
  width,
} from "../../constants";
import { useSelector } from "react-redux";

const Map: React.FC = ({ setDesiredDrugStore, desiredDrugStore }: any) => {
  const data = useSelector((state: any) => state.root.drugStores);
  const mapRef = React.useRef<MapView | null>(null);
  const currentLocation = useSelector(
    (state: any) => state.root.currentLocation
  );

  if (!desiredDrugStore) {
    desiredDrugStore = currentLocation;
  }
  const p = (title: string) => {
    switch (title) {
      case "Kalti's msemmen":
        return KHALTI;
      case "Almakane Casablanca":
        return ALMAKAN;
      case "Touda Ecolodge Atlas Mountains Morocco":
        return ECOLODGE;
      default:
        return KHALTI;
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      console.log(desiredDrugStore);
      mapRef.current.animateToRegion({
        latitude: desiredDrugStore.lat,
        longitude: desiredDrugStore.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [desiredDrugStore]);

  const memoizedMarkers = useMemo(
    () =>
      data.map((item: any, index: number) => (
        <Marker
          key={index.toString()}
          coordinate={{
            latitude: item?.lat,
            longitude: item?.lng,
          }}
          title={item?.title}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );

            setDesiredDrugStore(item);
            handleDesiredButtonPress(item?.lat, item?.lng);
          }}
          style={{
            backgroundColor: "transparent",
            alignItems: "center",
            height: 105,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MapCallout
            tooltip
            style={{
              width: 300,
              height: 300,
              borderColor: "black",
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 2,
              justifyContent:'space-around'
            }}
          >
            <Image
              style={{ width: 300, height: 120 }}
              source={p(item?.title)}
            />
            <Text style={{fontFamily:'montserrat_bold', textDecorationLine:'underline', padding:5, alignSelf:'center', fontSize:20}}>{item?.title}</Text>
            <Text style={{  padding:10, alignSelf:'center', fontSize:12}}>⏰{"09:00 a.m/ 07:30 p.m"}</Text>
            <Text style={{  padding:10, alignSelf:'center', fontSize:12}}>📞{item?.phone}</Text>
            <Text style={{  padding:10, alignSelf:'center', fontSize:12}}>📍{item?.address}</Text>


          </MapCallout>
          <View>
            <Image
              source={DRUG_STORE_PIN}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
        </Marker>
      )),
    [data]
  );

  const handleLocationButtonPress = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: currentLocation.lat,
        longitude: currentLocation.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };

  const handleDesiredButtonPress = (lat: number, lng: number) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };

  return (
    <View style={mapStyles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 1,
          right: width * 0.05,
          top: height * 0.8,
        }}
        onPress={handleLocationButtonPress}
      >
        <View style={mapStyles.headerButtonsLocationWrapper}>
          <FontAwesome5
            name="location-arrow"
            size={20}
            color={"black"}
            style={mapStyles.headerButtonsLocationIcon}
          />
        </View>
      </TouchableOpacity>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        ref={mapRef}
        region={{
          latitude: desiredDrugStore.lat,
          longitude: desiredDrugStore.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: currentLocation.lat,
            longitude: currentLocation.lng,
          }}
        >
          <Image source={LOCATE_PIN} style={{ width: 60, height: 60 }} />
        </Marker>
        {memoizedMarkers}
      </MapView>
    </View>
  );
};

const MapWithFade = withFadeInView(Map);

export default MapWithFade;
