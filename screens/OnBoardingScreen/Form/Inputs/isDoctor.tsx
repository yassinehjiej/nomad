import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { width } from "../../../../constants";

const IsDoctor = ({ handleUser }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
    handleUser("isDoctor", !isChecked);
  };

  return (
    <View style={styles.container}>
      <CheckBox
        title="By checking this box , you agree on the Licence Agreement of Nomad's app and the Privacy Policy of Nomad."
        checked={isChecked}
        onPress={toggleCheckBox}
        style={{ zIndex: -1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "center",
    zIndex: -1,
  },
});

export default IsDoctor;
