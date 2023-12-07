import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import StepList from "./stepList";
import ImageContainer from "../../components/Shared/ImageContainer";
import {
  FORM_ICON,
  HELLO_ICON,
  LOGO,
  height,
  width,
} from "../../constants";
import { DEFAULT_SHADOW } from "../../constants";
import FadeInView from "../../components/Shared/FadeInView";
const steps = [
  {
    id: 1,
    title: "Welcome to Nomad",
    subTitle: "Your personalized travel companion, a new journey awaits for you",
    content: HELLO_ICON,
  },
  {
    id: 2,
    title: "Let's get started",
    subTitle: "Let's get to know you first",
    content: FORM_ICON,
  }
];

const App: React.FC<any> = ({setRules}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FadeInView>
        <View id="logo" style={styles.logo}>
          <ImageContainer
            imageUrl={LOGO}
            width={width * 0.5}
            height={height * 0.15}
            resizeMode='center'
          />
        </View>
        <StepList steps={steps} handleStepChange={handleStepChange} />
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            activeOpacity={currentStep !== 1 ? 1 : 0}
            style={{
              ...styles.submitButton,
              backgroundColor: currentStep === 1 ? "#CC9870" : "#979797",
            }}
            onPress={currentStep === 1 ? ()=>setRules(true) : ()=>{}}
          >
            <Text style={styles.submitButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </FadeInView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1 },
  logo: {
    display: "flex",
    alignSelf: "center",
    borderRadius:10
  },
  submitButtonContainer: {
    height: height * 0.2,
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    width: width * 0.6,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
    ...DEFAULT_SHADOW,
  },
  submitButtonText: {
    fontFamily: "montserrat_bold",
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

export default App;
