import React, { useEffect, useMemo, useState } from "react";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Image,
  TouchableOpacity,
  View,
  Platform,
  Text,
  LayoutAnimation,
} from "react-native";
import withFadeInView from "../Shared/WithFadeInView";
import { mapStyles } from "../../styles/Map";
import { FontAwesome5 } from "@expo/vector-icons";
import { DRUG_STORE_PIN, LOCATE_PIN, height, width } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setDesiredDrugStore } from "../../redux/actions";
import { DrugStoreDataStructure } from "../../types";

const Map: React.FC = ({ setDesiredDrugStore }: any) => {
  const data = useSelector((state: any) => state.root.drugStores);
  const dispatch = useDispatch();
  const mapRef = React.useRef<MapView | null>(null);
  const currentLocation = useSelector(
    (state: any) => state.root.currentLocation
  );

  const desiredLocation = useSelector(
    (state: any) => state.root.desiredLocation
  );

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: desiredLocation.lat,
        longitude: desiredLocation.lng,
        latitudeDelta: 0.0005,
        longitudeDelta: 0.005,
      });
    }
  }, [desiredLocation]);

  const memoizedMarkers = useMemo(
    () =>
      data.map((item: any, index: number) => (
        <Marker
          key={index.toString()}
          coordinate={{
            latitude: item.lat,
            longitude: item.lng,
          }}
          title={item?.title}
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

            setDesiredDrugStore(item);
            handleDesiredButtonPress(item.lat, item.lng);
          }}
          style={{
            backgroundColor: "transparent",
            alignItems: "center",
            height: 105,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
        latitudeDelta: 0.0005,
        longitudeDelta: 0.005,
      });
    }
  };

  const handleDesiredButtonPress = (lat: number, lng: number) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0005,
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
          top: height * 0.75,
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
          latitude: desiredLocation.lat,
          longitude: desiredLocation.lng,
          latitudeDelta: 0.0005,
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
