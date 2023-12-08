import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { DOWN, ROBOT_LOGO, USER_ICON, height, width } from "../constants";
import { Image } from "react-native";
import { data } from "../data/pharmacies";
import { useDispatch } from "react-redux";
import { setDrugStores, swipeAction } from "../redux/actions";

// Define the structure of each conversation stage
interface ChatStage {
  message: string;
  responses: string[];
}

// Define the conversation flow

export default function ChatScreen({ setDesiredDrugStore }: any) {
  const [selectedResponses, setSelectedResponses] = useState<string[]>([
    "Hello Ghali! How can I help you today?",
  ]);
  console.log(selectedResponses[9]);
  const conversation: ChatStage[] = [
    {
      message: "hey ! this is Nomad bot , how can i help you ?",
      responses: ["i need help regarding my travel"],
    },
    {
      message: "where are you planning to go ? ",
      responses: ["Ifrane", "Casablanca", "Marrakesh"],
    },
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
        "Adventure",
        "Relaxation",
        "History",
        "Eco-friendly",
        "Local-spot",
        "Shopping",
        "Art",
        "Family-friendly",
        "Romantic",
        "Luxury",
        "Budget-friendly",
      ],
    },
    {
      message: "I suggest to you this place",
      responses: [selectedResponses.includes('Ifrane') ? "Khalti's msemmen" : selectedResponses.includes('Casablanca') ? "Ashokai Casablanca" : "Touda Ecolodge Atlas Mountains Morocco"],
    },
    {
      message: "Here is the details of the restaurant you choose",
      responses: [
        `🍽️ ${
          selectedResponses[11]
            ? data.find((d) => d.title === selectedResponses[11])?.title
            : ""
        }`,
        `📍 ${
          selectedResponses[11]
            ? data.find((d) => d.title === selectedResponses[11])?.address
            : ""
        }`,

        `📞 ${
          selectedResponses[11]
            ? data.find((d) => d.title === selectedResponses[11])?.phone
            : ""
        }`,
        `🛣️ ${
          selectedResponses[11]
            ? data
                .find((d) => d.title === selectedResponses[11])
                ?.distance?.toFixed(2)
            : ""
        } km`,
      ],
    },
  ];
  const [currentStage, setCurrentStage] = useState(0);

  // Reference to the ScrollView
  const scrollViewRef = useRef<ScrollView>(null);
  const dispatch = useDispatch();
  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  // Function to handle user response selection
  const handleResponse = (responseIndex: number) => {
    // Save the selected response
    if (currentStage < 7) {
      setSelectedResponses([
        ...selectedResponses,
        conversation[currentStage].responses[responseIndex],
        conversation[currentStage + 1].message,
      ]);

      // Move to the next stage
    }
    setCurrentStage(currentStage + 1);
  };

  const reset = () => {
    setSelectedResponses(["Hello! How can I help you today?"]);
    setCurrentStage(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.responsesContainer}
        onContentSizeChange={() => scrollToBottom()}
      >
        {selectedResponses.map((response, index) => {
          return (
            currentStage < 8 && (
              <>
                {index % 2 === 0 && (
                  <View style={{ ...styles.robot, backgroundColor: "white" }} key={response}>
                    <Image source={ROBOT_LOGO} style={styles.icon} />
                    <View style={styles.robot}>
                      <Text style={styles.text}>{response}</Text>
                    </View>
                  </View>
                )}
                {index % 2 !== 0 && (
                  <View
                    key={response}
                    style={{
                      ...styles.userContainer,
                      backgroundColor: "white",
                    }}
                  >
                    <Image
                      source={USER_ICON}
                      style={{ ...styles.icon, alignSelf: "flex-end" }}
                    />
                    <View style={styles.user}>
                      <Text style={styles.text}>{response}</Text>
                    </View>
                  </View>
                )}
              </>
            )
          );
        })}

        {currentStage < 6 &&
          conversation[currentStage].responses.map((response, index) => (
            <TouchableOpacity
              key={response}
              onPress={() => {
                handleResponse(index);
              }}
              style={{
                alignSelf: "center",
                alignContent: "center",
                borderColor: "gray",
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: "gray",
                padding: 5,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "montserrat_bold",
                  fontSize: 14,
                  color: "white",
                }}
              >
                {response}
              </Text>
            </TouchableOpacity>
          ))}
        {currentStage === 6 && (
          <View
            style={{
              width: width * 0.8,
              alignSelf: "center",
              backgroundColor: "white",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            {conversation[currentStage].responses.map((response, index) => (
              <View
                key={response}
                style={{
                  alignSelf: "flex-start",
                  alignContent: "center",
                  borderColor: "gray",
                  borderWidth: 2,
                  borderRadius: 5,
                  backgroundColor: "white",
                  padding: 5,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "montserrat_bold",
                    fontSize: 14,
                    color: "black",
                  }}
                >
                  {response}
                </Text>
              </View>
            ))}
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "white",
                borderColor: "black",
                borderRadius: 10,
                borderWidth: 2,
                margin: 10,
              }}
              onPress={() => {
                setDesiredDrugStore(
                  selectedResponses[11]
                    ? data.find((d) => d.title === selectedResponses[11])
                    : {}
                );
                dispatch(swipeAction(DOWN));
                if (selectedResponses[11])
                  dispatch(
                    setDrugStores([
                      data.find((d) => d.title === selectedResponses[11]),
                    ] as any)
                  );
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "montserrat_bold",
                  fontSize: 14,
                  color: "black",
                }}
              >
                Go to Map 📍
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "white",
                borderColor: "black",
                borderRadius: 10,
                borderWidth: 2,
                margin: 10,
              }}
              onPress={() => {
                reset();
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "montserrat_bold",
                  fontSize: 14,
                  color: "black",
                }}
              >
                Continue ➡️
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// Define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "flex-start",
    width: "100%",
    height: height * 0.8,
  },
  responsesContainer: {
    flex: 1,
    marginBottom: 20,
    width: "100%",
  },
  response: {},
  robot: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#754730",
    marginLeft: 10,
    borderRadius: 5,
  },
  userContainer: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#754730",
    marginLeft: 10,
    borderRadius: 5,
  },
  user: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#5986AC",
    marginRight: 10,
    borderRadius: 5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 90,
    marginBottom: 10,
  },
  text: {
    fontFamily: "montserrat_bold",
    color: "white",
  },
  // ... more styles
});
