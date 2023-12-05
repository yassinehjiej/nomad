import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ROBOT_LOGO, USER_ICON, height } from "../constants";
import { Image } from "react-native";

// Define the structure of each conversation stage
interface ChatStage {
  message: string;
  responses: string[];
}

// Define the conversation flow
const conversation: ChatStage[] = [
  {
    message: "Hello! How can I help you today?",
    responses: ["Ask about the weather", "Get help with a problem"],
  },
  {
    message: "Hello! How can I help you tomorow?",
    responses: ["Ask about ", "Get help "],
  },
  {
    message: "Hello! How can I help you ghali?",
    responses: [
      "Ask about the weather yassine",
      "Get help with a problem yassine",
    ],
  },
  {
    message: "Hello! How can I help you x?",
    responses: ["Ask about the weather", "Get help with a problem ali"],
  },
  {
    message: "Hello! How can I help you y?",
    responses: ["Ask about the weather", "Get help with a problem"],
  },
  {
    message: "Hello! How can I help you z?",
    responses: ["Ask about ", "Get help "],
  },
  {
    message: "Hello! How can I help you aaa?",
    responses: [
      "Ask about the weather yassine",
      "Get help with a problem yassine",
    ],
  },
  {
    message: "Hello! How can I help you bbb?",
    responses: ["Ask about the weather", "Get help with a problem ali"],
  },
  // ... more stages
];

export default function ChatScreen() {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedResponses, setSelectedResponses] = useState<string[]>([
    conversation[0].message,
  ]);

  // Reference to the ScrollView
  const scrollViewRef = useRef<ScrollView>(null);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.responsesContainer}
        onContentSizeChange={() => scrollToBottom()}
      >
        {selectedResponses.map((response, index) => {
          return (
            currentStage < 7 && (
              <>
                {index % 2 === 0 && (
                  <View style={{ ...styles.robot, backgroundColor: "white" }}>
                    <Image source={ROBOT_LOGO} style={styles.icon} />
                    <View style={styles.robot}>
                      <Text style={styles.text}>{response}</Text>
                    </View>
                  </View>
                )}
                {index % 2 !== 0 && (
                  <View key={index} style={{...styles.userContainer, backgroundColor: "white" }}>
                    <Image source={USER_ICON} style={{...styles.icon, alignSelf:'flex-end'}} />
                    <View style={styles.user}>
                      <Text style={styles.text}>{response}</Text>
                    </View>
                  </View>
                )}
              </>
            )
          );
        })}

        {currentStage < 7 &&
          conversation[currentStage].responses.map((response, index) => (
            <Button
              key={index}
              title={response}
              onPress={() => {
                handleResponse(index);
              }}
            />
          ))}
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
  response: {
 
  },
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
