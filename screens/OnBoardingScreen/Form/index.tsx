import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  View,
} from "react-native";
import React, { useState } from "react";
import { OnBoardingScreenProps, User } from "../../../types";
import Gender from "./Inputs/Gender";
import Birthday from "./Inputs/Birthday";
import { saveData } from "../../../utils/storage";
import FirstName from "./Inputs/FirstName";
import LastName from "./Inputs/LastName";
import Email from "./Inputs/Email";
import Country from "./Inputs/Country";
import IsDoctor from "./Inputs/isDoctor";

export default function index({ handleOnboarding }: OnBoardingScreenProps) {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const [user, setUser] = useState<User>({
    firstName: null,
    lastName: null,
    gender: "male",
    bloodGroup: null,
    height: "170",
    email:'',
    weight: "60",
    birthday: maxDate,
    isDoctor: false,
    country:''
  });

  const handleForm = () => {
      saveData("user", user);
      handleOnboarding();
  };

  const handleUser = (type: string, value: any) => {
    switch (type) {
      case "firstName":
        setUser({ ...user, firstName: value });
        break;
      case "lastName":
        setUser({ ...user, lastName: value });
        break;
      case "email":
        setUser({ ...user, email: value });
        break;
      case "country":
        setUser({ ...user, country: value });
        break;
      case "gender":
        setUser({ ...user, gender: value });
        break;
      case "height":
        setUser({ ...user, height: value });
        break;
      case "weight":
        setUser({ ...user, weight: value });
        break;
      case "birthday":
        setUser({ ...user, birthday: value });
        break;
      case "isDoctor":
        setUser({ ...user, isDoctor: value });
        break;
    }
  };
  return (
    <ScrollView style={styles.container}>
      <FirstName handleUser={handleUser} /> 
      {/* <LastName handleUser={handleUser} /> */}
      <Email handleUser={handleUser} />
      <Country handleUser={handleUser} />

   
      <Birthday handleUser={handleUser} />
      <Gender handleUser={handleUser} />
      <IsDoctor handleUser={handleUser}/>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: -1,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            handleOnboarding();
          }}
          style={{ alignSelf: "center", zIndex: -1 }}
        >
          <Text style={{ textDecorationLine: "underline", fontSize: 14 }}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleForm();
          }}
          style={{
            alignSelf: "center",
            zIndex: -2,
            width: 112,
            height: 38,
            backgroundColor: "#5986AC",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "montserrat_bold",
              fontSize: 14,
              color: "white",
              zIndex: -1,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {},
  textInput: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "gray",
  },
  gender: {
    flex: 1,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
