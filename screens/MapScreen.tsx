import React, { useMemo, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import { DOWN, UP, width } from "../constants";
import { drugStoreTypes } from "../data/filters";
import {
  setDrugStores,
  swipeAction,
  swipeActionPharma,
} from "../redux/actions";
import { mapScreenStyles } from "../styles/Screens/MapScreenStyles";
import MapWithFade from "../components/Map/MapView";
import SwipeableComponent from "../components/Shared/SwippableVertical";
import PharmaListWithFade from "../components/Map/PharmaList";
import SearchInput from "../components/Shared/SearchInput";
import { fetchDrugStores } from "../api/drugStores";
import PharmaDetails from "../components/Map/PharmaDetails";
import FadeInView from "../components/Shared/FadeInView";

export default function MapScreen() {
  const currentLocation = useSelector(
    (state: any) => state.root.currentLocation
  );
  const { lat, lng } = currentLocation;
  const [desiredDrugStore, setDesiredDrugStore] = useState(
    useSelector((state: any) => state.root.drugStore)
  );

  const [inputWidth, setInputWidth] = useState(width * 0.9);
  const [selectedFilter, setSelectedFilter] = useState(drugStoreTypes[0].name);
  const [type, setType] = useState("pharmacies");
  const [searchedText, setSearchedText] = useState("");
  const dispatch = useDispatch();
  const showFilters = useSelector((state: any) => state.root.showFilters);
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearchedText(e.nativeEvent.text);
  };

  const apiParams = useMemo(
    () => ({
      selectedFilter,
      searchedText,
      lat,
      lng,
    }),
    [selectedFilter, searchedText, lat, lng]
  );

  const { data, isLoading, isError } = useQuery(
    ["fetchDrugStores", apiParams],
    () => fetchDrugStores(apiParams), // Call your API function
    {
      enabled: searchedText.length >= 3,
    }
  );

  if (data) {
    dispatch(setDrugStores(data));
  }

  const renderItem = ({ item }: { item: { name: string; icon: any } }) => (
    <TouchableOpacity
      style={{
        marginRight: 15,
        backgroundColor: selectedFilter === item.name ? "#00C3A5" : "white",
        minWidth: width * 0.2,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: selectedFilter === item.name ? "#00C3A5" : "black",
        borderWidth: 0.3,
      }}
      onPress={() => setSelectedFilter(item.name)}
    >
      <View>{item.icon}</View>
      <Text
        style={{
          fontFamily: "montserrat_bold",
          color: selectedFilter === item.name ? "white" : "#00C3A5",
          fontSize: 14,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const handleFocus = () => {
    dispatch(swipeActionPharma(DOWN));
    dispatch(swipeAction(UP));
  };

  return (
    <FadeInView style={mapScreenStyles.container}>
      <MapWithFade setDesiredDrugStore={setDesiredDrugStore} />
      <SwipeableComponent
        children={
          <PharmaListWithFade setDesiredDrugStore={setDesiredDrugStore} />
        }
      />
      {desiredDrugStore && <PharmaDetails pharma={desiredDrugStore} />}
      <View style={mapScreenStyles.searchPart}>
        <SafeAreaView>
          <SearchInput
            containerStyle={{ ...mapScreenStyles.searchBarContainer }}
            inputStyle={{
              ...mapScreenStyles.seachBarTextInput,
              width: inputWidth,
            }}
            iconStyle={mapScreenStyles.searchBarIcon}
            subject={type}
            handleFocus={handleFocus}
            onChange={handleChange}
          />
          {showFilters && (
            <FlatList
              data={drugStoreTypes}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </SafeAreaView>
      </View>
    </FadeInView>
  );
}
