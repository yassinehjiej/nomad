import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Linking,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PharmaDetailsProps } from "../../types";
import { pharmaDetailsStyles } from "../../styles/SwippableVertical";
import {
  swipeActionPharma,
  swipeDownPharma,
  swipeUpPharma,
} from "../../utils/gestureActions";
import { useDispatch, useSelector } from "react-redux";
import { setPanResponder, showFilters } from "../../redux/actions";
import { height, width, DEFAULT_SHADOW } from "../../constants";
import { showLocation } from "react-native-map-link";
import { Button } from "react-native-elements";
interface ChatStage {
  message: string;
  responses: string[];
}
const PharmaDetails = () => {
  const panY = useRef(new Animated.Value(height)).current;
  const [offsetY, setOffsetY] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
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
        dispatch(showFilters(true))
        swipeDownPharma(panY);
      }
    },
  });

  useEffect(() => {
    swipeActionPharma(action, panY);
  }, [action]);

  const handleResponse = (responseIndex: number) => {
    setCurrentStage(currentStage + 1);
  };

  const conversation: ChatStage[] = [
    {
      message: "The question ?",
      responses: ["Culture",
        "Nature",
        "Cuisine",
        "Adventure",
        "Relaxation",
        "History",
        "Shopping",
        "Art",
        "Nightlife",
        "Family-friendly",
        "Romantic",
        "Luxury",
        "Budget-friendly",
        "Festivals"],
    },

    {
      message: "The question 2 ?",
      responses: ["$", "$$", "$$$"],
    },
    {
      message: "The question 3 ?",
      responses: ["choice 1", "choice 2"],
    },
    {
      message: "The question 4",
      responses: ["Choice 1", "Choice 2"],
    },
    // ... more stages
  ];

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

        <View style={styles.container}>
      {currentStage < 3 &&  <Text>{conversation[currentStage].message}</Text>}
        <View style={styles.responseContainer}>
          {currentStage < 3 &&conversation[currentStage].responses.map((response, index) => (
            <TouchableOpacity
              key={index}
              style={styles.responseButton}
              onPress={() => handleResponse(index)}
            >
              <Text style={styles.responseButtonText}>{response}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {flex:1,
justifyContent:'center'
  },
  responseContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Cela permettra aux réponses de passer à la ligne automatiquement
  },
  responseButton: {
    backgroundColor: "#f0f0f0", // Couleur de fond des boutons de réponse
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5, // Espace entre les réponses
    borderRadius: 10, // Bordure arrondie pour les boutons de réponse
  },
  responseButtonText: {
    fontSize: 16, // Taille de la police pour les réponses
  },
  // ... more styles
});

export default PharmaDetails;
