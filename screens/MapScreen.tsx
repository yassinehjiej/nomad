import React, { useMemo, useState } from "react";
import {
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import { DOWN, MARK_ICON, UP, width } from "../constants";
import { drugStoreTypes } from "../data/filters";
import {
  setDrugStores,
  swipeAction,
  swipeActionPharma,
  showFilters as sf
} from "../redux/actions";
import { mapScreenStyles } from "../styles/Screens/MapScreenStyles";
import MapWithFade from "../components/Map/MapView";
import SwipeableComponent from "../components/Shared/SwippableVertical";
import SearchInput from "../components/Shared/SearchInput";
import { fetchDrugStores } from "../api/drugStores";
import PharmaDetails from "../components/Map/PharmaDetails";
import FadeInView from "../components/Shared/FadeInView";
import ChatScreen from "./ChatScreen";

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

  const handleFocus = () => {
    dispatch(sf(false))
    dispatch(swipeActionPharma(UP));
  };

  const handleFocusHelp = () => {
    dispatch(swipeAction(UP));
  };

  return (
    <FadeInView style={mapScreenStyles.container}>
      <MapWithFade setDesiredDrugStore={setDesiredDrugStore} />
      <SwipeableComponent children={<ChatScreen />} />
      <PharmaDetails />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {showFilters && (
          <View style={mapScreenStyles.searchPart}>
            <SafeAreaView>
              <SearchInput
                containerStyle={{ ...mapScreenStyles.searchBarContainer }}
                inputStyle={{
                  ...mapScreenStyles.seachBarTextInput,
                  width: "60%",
                }}
                iconStyle={mapScreenStyles.searchBarIcon}
                subject={"Search"}
                handleFocus={handleFocus}
                
              />
            </SafeAreaView>
          </View>
        )}
        {showFilters && (
          <View style={mapScreenStyles.searchPart}>
            <SafeAreaView>
              <SearchInput
                containerStyle={{ ...mapScreenStyles.searchBarContainer }}
                inputStyle={{
                  ...mapScreenStyles.seachBarTextInput,
                  width: "60%",
                }}
                iconStyle={mapScreenStyles.searchBarIcon}
                subject={"AI Help"}
             
                handleFocus={handleFocusHelp}
              />
            </SafeAreaView>
          </View>
        )}
      </View>
    </FadeInView>
  );
}
