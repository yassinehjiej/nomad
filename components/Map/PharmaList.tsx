import React, { useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesiredLocation,
  setPanResponder,
  swipeAction,
  swipeActionPharma,
} from "../../redux/actions";
import { pharmaListStyles } from "../../styles/PharmaList";
import { DrugStoreList } from "../../types";
import { DEFAULT_SHADOW, UP } from "../../constants";
import {
  DAY_ICON,
  DOWN,
  H24_ICON,
  NIGHT_ICON,
  height,
  width,
} from "../../constants";

const PharmaList = ({setDesiredDrugStore}:any) => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.root.drugStores);
  const handleRelocate = ({ item, index }: DrugStoreList) => {
    if (item.lat && item.lng) {
      // dispatch(setDesiredDrugStore(item));
      setDesiredDrugStore(item)
      dispatch(
        setDesiredLocation({
          lat: item.lat,
          lng: item.lng,
        })
      );
      dispatch(swipeActionPharma(UP));
      dispatch(swipeAction(DOWN));
    
      dispatch(setPanResponder(true));
    }
  };

  const renderItem = ({ item, index }: DrugStoreList) => {
    return (
      <View
        style={{
          height: 100,
          width: width * 0.9,
          flexDirection: "row",
          justifyContent: "space-around",
          alignSelf: "center",
          backgroundColor: "white",
          marginVertical: 15,
          borderRadius: 20,
          ...DEFAULT_SHADOW,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            width: width * 0.4,
            margin: 15,
            marginLeft: 25,
            marginVertical: 15,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontFamily: "montserrat_bold", fontSize: 12 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 11, color: "gray", fontStyle: "italic" }}>
              Ouverte
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "montserrat_bold",
              fontSize: 12,
              color: "gray",
            }}
          >
            {item?.city}
          </Text>
        </View>
        <View
          style={{
            width: width * 0.1,

            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          {handlePicto(item?.type)}
        </View>
        <View
          style={{
            borderRadius: 20,
            width: width * 0.4,
            right: 0,
            marginRight: 25,
            marginVertical: 15,
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontFamily: "montserrat_bold",
              fontSize: 10,
              textAlign: "right",
              color: "gray",
            }}
          >
            {item?.distance?.toFixed(2)} km
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              borderRadius: 5,
              backgroundColor: "#00C3A5",
            }}
            onPress={() => {
              handleRelocate({ item, index });
            }}
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
      </View>
    );
  };

  const handleScroll = (event: any) => {
    Keyboard.dismiss();
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY < -150) {
      dispatch(swipeAction(DOWN));
      dispatch(setPanResponder(true));
    }
  };

  const { container, body, hook } = pharmaListStyles;

  return (
    <View style={container}>
      <View style={body}>
        <View style={hook}></View>

        <FlatList
          data={data}
          renderItem={(e) => renderItem(e)}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, marginTop: height * 0.15, width: width }}
          onScroll={handleScroll}
        />
      </View>
    </View>
  );
};

export default PharmaList;

const handlePicto = (type: string | null) => {
  switch (type) {
    case "DAY":
      return <Image source={DAY_ICON} style={{ width: 30, height: 30 }} />;
    case "NIGHT":
      return <Image source={NIGHT_ICON} style={{ width: 30, height: 30 }} />;
    case "FULL":
      return <Image source={H24_ICON} style={{ width: 30, height: 30 }} />;
    default:
      return <Image source={DAY_ICON} style={{ width: 30, height: 30 }} />;
  }
};
