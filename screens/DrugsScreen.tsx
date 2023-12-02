import React, { useMemo, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import { DOWN, UP, width } from "../constants";
import { drugTypes } from "../data/filters";
import {
  setDrugStores,
  swipeAction,
  swipeActionPharma,
} from "../redux/actions";
import { mapScreenStyles } from "../styles/Screens/MapScreenStyles";
import SwipeableComponent from "../components/Shared/SwippableVertical";
import DrugListWithFade from "../components/Drugs/DrugList";
import SearchInput from "../components/Shared/SearchInput";
import { fetchDrugStores } from "../api/drugStores";
import DrugDetails from "../components/Drugs/DrugDetails";
import FadeInView from "../components/Shared/FadeInView";

export default function DrugScreen() {
  const currentLocation = useSelector(
    (state: any) => state.root.currentLocation
  );
  const { lat, lng } = currentLocation;
  const [desiredDrug, setDesiredDrug] = useState(null);

  const [inputWidth, setInputWidth] = useState(width * 0.9);
  const [selectedFilter, setSelectedFilter] = useState(drugTypes[0].name);
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
    ["fetchDrugs", apiParams],
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
        borderColor: selectedFilter === item.name ? "#00C3A5" : "transparent",
        borderWidth: 0.3,
      }}
      onPress={() => setSelectedFilter(item.name)}
    >
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
    // dispatch(swipeActionPharma(DOWN));
    // dispatch(swipeAction(UP));
  };

  return (
    <FadeInView style={mapScreenStyles.container}>
      {desiredDrug && <DrugDetails drug={DrugDetails} />}
      <View style={{ ...mapScreenStyles.searchPart, backgroundColor: "white" }}>
        <SafeAreaView>
          <SearchInput
            containerStyle={{ ...mapScreenStyles.searchBarContainer }}
            inputStyle={{
              ...mapScreenStyles.seachBarTextInput,
              width: inputWidth,
            }}
            iconStyle={mapScreenStyles.searchBarIcon}
            subject={"médicaments"}
            handleFocus={handleFocus}
            onChange={handleChange}
          />
          {showFilters && (
            <FlatList
              data={drugTypes}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </SafeAreaView>
      </View>
      <DrugListWithFade setDesiredDrug={setDesiredDrug} />
    </FadeInView>
  );
}
