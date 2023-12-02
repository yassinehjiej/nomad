import { View, Text, Modal, Pressable, Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import { height } from "../../../../constants";
import { InputFormOnBoardingProps } from "../../../../types";
import { bloodGroups } from "../../../../data/bloodGroup";

export default function BloodGroup({handleUser}:InputFormOnBoardingProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedBloodGroup, setSelectedBloodGroup] = useState(bloodGroups[0]);
  return (
    <View style={styles.container}>
      <Text>Type sanguin</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {bloodGroups.map((e, index) => (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setSelectedBloodGroup(e);
                  handleUser('bloodGroup',e)
                  setModalVisible(!modalVisible);
                }}
                key={index.toString()}
              >
                <Text style={styles.textStyle}>{e}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
      <View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>{selectedBloodGroup}</Text>
        </Pressable>
      </View>
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
  },
  modalView: {
    height: height * 0.6,
    justifyContent: "space-around",

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
    backgroundColor: "#00C3A5",
  },
  buttonClose: {
    backgroundColor: "#00C3A5",
    width: 100,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});
