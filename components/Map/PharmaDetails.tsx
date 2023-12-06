import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { pharmaDetailsStyles } from "../../styles/SwippableVertical";
import {
  swipeActionPharma,
  swipeDownPharma,
  swipeUpPharma,
} from "../../utils/gestureActions";
import { useDispatch, useSelector } from "react-redux";
import {
  setDesiredDrugStore,
  setDrugStores,
  setPanResponder,
  showFilters,
} from "../../redux/actions";
import { height, width } from "../../constants";
import { data } from "../../data/pharmacies";
interface ChatStage {
  message: string;
  responses: string[];
}
const PharmaDetails = ({ setDesiredDrugStore }: any) => {
  const panY = useRef(new Animated.Value(height)).current;
  const [offsetY, setOffsetY] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedWords, setSelectedWord] = useState<string[]>([]);
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
        dispatch(showFilters(true));
        swipeDownPharma(panY);
      }
    },
  });

  const reset = () => {
    setCurrentStage(0);
    setSelectedWord([]);
  };

  useEffect(() => {
    reset();
    swipeActionPharma(action, panY);
  }, [action]);

  useEffect(() => {
    if (currentStage === 3) {
      setTimeout(() => {
        dispatch(showFilters(true));
        dispatch(setDrugStores(data));
        swipeDownPharma(panY);
        setDesiredDrugStore(data[0]);
      }, 1000);
    }
  }, [currentStage]);

  const handleResponse = (response: string) => {
    if (selectedWords.includes(response)) {
      setSelectedWord(selectedWords.filter((word) => word !== response));
    } else {
      setSelectedWord([...selectedWords, response]);
    }
  };

  const conversation: ChatStage[] = [
    {
      message: "What would you like to do?",
      responses: [
        "Take a coffee",
        "Eat lunch",
        "Enjoy a nice dinner",
        "Have a fun time",
        "Visit Places !",
      ],
    },

    {
      message: "Select a price range",
      responses: ["$", "$$", "$$$"],
    },
    {
      message:
        "Tell us more : (choose amongst the keywords that match your mood and interests)",
      responses: [
        "Culture",
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
        "Festivals",
      ],
    },
  ];

  return (
    <Animated.View
      style={[
        pharmaDetailsStyles.container,
        {
          transform: [{ translateY: panY }],
          backgroundColor: "white",
          borderRadius: 20,
          justifyContent: "center",
        },
      ]}
      {...panResponder.panHandlers}
    >
      <View style={styles.container}>
        {currentStage === 3 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>
              We are looking for the best place for you
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              position: "absolute",
              zIndex: 1000,
              right: width * 0.08,
              top: height * 0.8,
              backgroundColor: "black",
              borderRadius: 10,
              width: 100,
              height: 30,
              justifyContent: "center",
            }}
            onPress={() => setCurrentStage(currentStage + 1)}
          >
            <Text
              style={{
                fontFamily: "montserrat_bold",
                color: "white",
                alignSelf: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        )}
        {currentStage < 3 && (
          <Text
            style={{
              alignSelf: "center",
              marginBottom: 50,
              fontFamily: "montserrat_bold",
            }}
          >
            {conversation[currentStage].message}
          </Text>
        )}
        <View style={styles.responseContainer}>
          {currentStage < 3 &&
            conversation[currentStage].responses.map((response, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.responseButton,
                  backgroundColor: selectedWords.includes(response)
                    ? "#5986AC"
                    : "white",
                }}
                onPress={() => handleResponse(response)}
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
  container: { flex: 1, justifyContent: "center", width: "100%" },
  responseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // Cela permettra aux réponses de passer à la ligne automatiquement
  },
  responseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "gray",
    borderWidth: 2,
    margin: 5, // Espace entre les réponses
    borderRadius: 90, // Bordure arrondie pour les boutons de réponse
  },
  responseButtonText: {
    fontSize: 16, // Taille de la police pour les réponses
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "black",
  },

  // ... more styles
});

export default PharmaDetails;
