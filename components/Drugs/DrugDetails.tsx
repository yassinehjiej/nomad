import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Linking,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DrugDetailsProps, PharmaDetailsProps } from "../../types";
import {
  pharmaDetailsStyles,
} from "../../styles/SwippableVertical";
import {
  swipeActionPharma,
  swipeDownPharma,
  swipeUpPharma,
} from "../../utils/gestureActions";
import { useDispatch, useSelector } from "react-redux";
import { setPanResponder } from "../../redux/actions";
import { height, width, DEFAULT_SHADOW } from "../../constants";
import {showLocation} from 'react-native-map-link';

const DrugDetails = ({ drug }: DrugDetailsProps) => {
  const panY = useRef(new Animated.Value(height)).current;
  const [offsetY, setOffsetY] = useState(0);
  const action = useSelector((state: any) => state.root.swipeActionPharma);
  const dispatch = useDispatch();
  const panResponderEnabled = useSelector(
    (state: any) => state.root.panResponder
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => panResponderEnabled,
    onMoveShouldSetPanResponder: () => panResponderEnabled,
    onPanResponderMove: (_, gestureState) => {
      setOffsetY(offsetY + gestureState.dy);
    },
    onPanResponderRelease: (_) => {
      if (offsetY < 0) {
        swipeUpPharma(panY);
        dispatch(setPanResponder(false));
      } else if (offsetY > 0) {
        swipeDownPharma(panY);
      }
    },
  });

  useEffect(() => {
    swipeActionPharma(action, panY);
  }, [action]);

  return (
    <Animated.View
      style={[
        pharmaDetailsStyles.container,
        {
          transform: [{ translateY: panY }],
          backgroundColor: "white",
          borderRadius: 20,
        },
      ]}
      {...panResponder.panHandlers}
    >
      {/* <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          width: width * 0.9,
          marginVertical: 15,
          justifyContent: "space-between",
          height: height * 0.2,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ alignSelf: "center", display: "flex" }}>
            <Text
              style={{
                fontFamily: "montserrat_bold",
                fontSize: 16,
              }}
            >
              {pharma?.title}
            </Text>
            <Text style={{ fontSize: 12, color: "gray", fontStyle: "italic" }}>
              Ouverte
            </Text>
          </View>
          <View style={{ alignSelf: "center", display: "flex" }}>
            <Text
              style={{
                fontFamily: "montserrat_bold",
                fontSize: 12,
                textAlign: "right",
                color: "gray",
              }}
            >
              {pharma?.distance?.toFixed(2)} km
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontFamily: "montserrat_bold",
            fontSize: 12,
            color: "gray",
          }}
        >
          {pharma?.address}
        </Text>
        <View
          style={{
            borderRadius: 20,
            width: '100%',
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "#00C3A5",
              ...DEFAULT_SHADOW
            }}
            onPress={() => { console.log(`tel:+212${pharma?.phone}`);Linking.openURL(`tel:212${removeLeadingZero(pharma?.phone)}`);}}
          >
            <Text
              style={{
                fontFamily: "montserrat_bold",
                fontSize: 12,
                textAlign: "right",
                padding: 5,
                color: "white",
                paddingHorizontal: 10,
              }}
            >
              Appeler
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              backgroundColor: "#00C3A5",
              ...DEFAULT_SHADOW
            }}
            onPress={() => {
                showLocation({
                    latitude: pharma.lat ?? 0,
                    longitude: pharma.lng ?? 0,
            })}}
          >
            <Text
              style={{
                fontFamily: "montserrat_bold",
                fontSize: 12,
                textAlign: "right",
                padding: 5,
                color: "white",
                paddingHorizontal: 10,
              }}
            >
              Itinéraire
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </Animated.View>
  );
};

export default DrugDetails;


function removeLeadingZero(inputString:any) {
    if (inputString && inputString.length > 0 && inputString.charAt(0) === '0') {
      return inputString.substring(1);
    }
    return inputString;
  }