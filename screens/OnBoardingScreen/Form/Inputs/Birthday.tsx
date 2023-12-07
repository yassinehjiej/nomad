import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { InputFormOnBoardingProps } from "../../../../types";
import SlideVerticalView from "../../../../components/Shared/SlideVerticalView";
import DatePickerSlide from "../../../../components/Shared/DatePickerSlide";
import { DEFAULT_SHADOW } from "../../../../constants";

export default function Birthday({ handleUser }: InputFormOnBoardingProps) {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const [date, setDate] = useState(maxDate);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatFrenchDate = (date: any) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-EN", options);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    handleUser("birthday", currentDate);
    setDate(currentDate);
    toggleDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text>Birthday</Text>
      <TouchableOpacity
        onPress={toggleDatePicker}
        style={{
          ...DEFAULT_SHADOW,
          borderRadius: 20,
          borderColor: "gray",
          backgroundColor: "white",
          height: 38,
          width: "95%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.textInput}>{formatFrenchDate(date)}</Text>
      </TouchableOpacity>
      <DatePickerSlide
        isVisible={showDatePicker}
        date={date}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    height: 80,
    marginBottom: 20,
  },
  textInput: {
    alignSelf: "center",
    fontSize: 18,
    fontFamily: "montserrat_bold",
    color: "#CC9870",
  },
});
